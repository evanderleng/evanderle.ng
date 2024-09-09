// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';
// 2. Define your collection(s)



const projectCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        info: z.string(),
        video: z.string().optional(),
        link: z.string().optional(),
        source: z.string().optional(),
    }),
});



// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectCollection,
};