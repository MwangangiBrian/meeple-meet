'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { gameSchema } from '@/constants/validations';
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from '@/components/ImageUpload';

interface Props extends Partial<Game> {
  type?: 'create' | 'edit';
}

const GameForm = ({ type, ...game }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof gameSchema>>({
    resolver: zodResolver(gameSchema),
    defaultValues: {
      title: '',
      description: '',
      condition: 'GOOD',
      minPlayers: 1,
      maxPlayers: 1,
      playingTime: 1,
      imageUrls: '',
      complexityRating: 1,
      lendingPreference: 'LOCAL_ONLY',
    },
  });

  const onSubmit = async (values: z.infer<typeof gameSchema>) => {};

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* GAME TITLE */}
          <FormField
            control={form.control}
            name={'title'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Game Title</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Game Title"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* GAME DESCRIPTION */}
          <FormField
            control={form.control}
            name={'description'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Game Description</FormLabel>
                <FormControl>
                  <Textarea
                    required
                    placeholder="Enter game description"
                    {...field}
                    rows={10}
                    className="form-input h-24 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CONDITION */}
          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Game Condition</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GOOD">Good</SelectItem>
                      <SelectItem value="USED">Used</SelectItem>
                      <SelectItem value="LIKE_NEW">Like New</SelectItem>
                      <SelectItem value="FAIR">Fair</SelectItem>
                      <SelectItem value="POOR">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MIN PLAYERS */}
          <FormField
            control={form.control}
            name={'minPlayers'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Minimum Players</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Minimum players"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MAX PLAYERS */}
          <FormField
            control={form.control}
            name={'maxPlayers'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Maximum Players</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Maximum players"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  PLAY TIME */}
          <FormField
            control={form.control}
            name={'playingTime'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Playing Time</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Playing time"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RATING */}
          <FormField
            control={form.control}
            name={'complexityRating'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Complexity Rating</FormLabel>
                <FormControl>
                  <Input
                    min={1}
                    max={10}
                    required
                    placeholder="Complexity rating"
                    {...field}
                    className="form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* LENDING PREFERENCE */}
          <FormField
            control={form.control}
            name="lendingPreference"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Lending Preference</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a lending Preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LOCAL_ONLY">Local Only</SelectItem>
                      <SelectItem value="SHIPPING_OK">Shipping OK</SelectItem>
                      <SelectItem value="PICKUP_ONLY">Pickup Only</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* IMAGES */}
          <FormField
            control={form.control}
            name={'imageUrls'}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="capitalize">Photos</FormLabel>
                <FormControl>
                  <ImageUpload
                    type="image"
                    accept="image/*"
                    placeholder="Upload image"
                    folder="meeple-meet"
                    variant="dark"
                    onFileChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Game</Button>
        </form>
      </Form>
    </>
  );
};

export default GameForm;
