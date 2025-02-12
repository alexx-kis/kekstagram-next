import { z } from 'zod';

// %======================== validation ========================% //

const hashtagRegex = /^#[a-zA-Zа-яА-Я0-9_]+$/;

export const uploadFormSchema = z.object({
  image: z.any().nullable(),
  effect: z.string().nonempty('Please select an effect'),
  size: z.number(),
  hashtags: z
    .string()
    .optional()
    .transform((value) => value ? value.trim().split(/\s+/) : [])
    .refine((tags) => tags.every((tag) => hashtagRegex.test(tag)), {
      message: 'Each hashtag must start with # and contain only letters, numbers, or underscores.'
    })
    .refine((tags) => tags.every((tag) => tag.length <= 20), {
      message: 'Each hashtag must be at most 20 characters.'
    })
    .refine((tags) => new Set(tags).size === tags.length, {
      message: 'Hashtags must not be duplicated.'
    }),
  comment: z.string().max(140, 'Comment must be at most 140 characters.').optional(),
});