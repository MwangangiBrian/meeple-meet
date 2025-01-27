'use client';

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from 'imagekitio-next';
import React, { useRef, useState } from 'react';
import { config } from '@/lib/config';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Failed to fetch imagekit token: ${error.message}`);
  }
};

interface Props {
  type: 'image' | 'video';
  accept: string;
  placeholder: string;
  folder: string;
  variant: 'dark' | 'light';
  onFileChange: (filePath: string) => void;
  value?: string;
}

const ImageUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [progress, setProgress] = useState(0);

  const styles = {
    button: variant === 'dark' ? 'bg-gray-800' : 'bg-gray-200',
    placeholder: variant === 'dark' ? 'text-gray-200' : 'text-gray-800',
    text: variant === 'dark' ? 'text-gray-200' : 'text-gray-800',
  };

  const onError = (error: any) => {
    console.log(error);
    toast({
      title: `${type} upload failed`,
      description: `Your ${type} could not be uploaded. Please try again.`,
      variant: 'destructive',
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: `${type} upload success`,
      description: `Your ${type} has been uploaded successfully.`,
      variant: 'success',
    });
  };

  const onValidate = (file: file) => {
    if (type === 'image') {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: `${type} upload failed: Size too large`,
          description: `Image size should be less than 10MB`,
          variant: 'destructive',
        });
        return false;
      }
    } else if (type === 'video') {
      if (file.size > 40 * 1024 * 1024) {
        toast({
          title: `${type} upload failed: Size too large`,
          description: `Video size should be less than 40MB`,
          variant: 'destructive',
        });
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <IKUpload
          ref={ikUploadRef}
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          validateFile={onValidate}
          onUploadStart={() => {
            setProgress(0);
          }}
          onUploadProgress={({ loaded, total }) => {
            // get progress as a percent
            setProgress(Math.floor((loaded / total) * 100));
          }}
          folder={folder}
          accept={accept}
          className="hidden"
        />

        <Button
          className={cn('upload')}
          onClick={(e) => {
            e.preventDefault();

            if (ikUploadRef.current) {
              ikUploadRef.current?.click();
            }
          }}
        >
          <p className={cn('text-base', styles.placeholder)}>{placeholder}</p>

          {file && (
            <p className={cn('upload-filename', styles.text)}>
              {file.filePath}
            </p>
          )}
        </Button>
        {progress > 0 && progress !== 100 && (
          <div className="w-full rounded-full bg-green-200">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        )}

        {file &&
          (type === 'image' ? (
            <IKImage
              alt={file.filePath}
              path={file.filePath}
              width={500}
              height={300}
            />
          ) : type === 'video' ? (
            <IKVideo
              path={file.filePath}
              controls={true}
              className="h-96 w-full rounded-xl"
            />
          ) : null)}
      </ImageKitProvider>
    </>
  );
};

export default ImageUpload;
