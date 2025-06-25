import  z  from 'zod';

const movieSchema = z.object({
        title: z.string({
            invalid_type_error: 'Title must be a string',
            required_error: 'Title is required'
        }),
        year: z.number().int().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        rate: z.number().min(0).max(10).optional(),
        poster: z.string({
            required_error: 'Poster is required',
            invalid_type_error: 'Poster must be a valid URL'
        }).url('Poster must be a valid URL'),

        genre: z.array(
            z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Crime', 'Romance', 'Thriller'])
        ),
});

export function validateMovie(object) {
    return movieSchema.safeParse(object);
}

export function validatePartialMovie(object){
    return movieSchema.partial().safeParse(object); 
}
