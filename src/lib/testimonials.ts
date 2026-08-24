export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  color: string;
  rating: 5;
  year: string;
  body: string;
  truncated?: boolean;
  localGuide?: boolean;
  tags?: readonly string[];
};

export const testimonials = [
  {
    id: 'dean-stegall',
    name: 'Dean Stegall',
    initials: 'D',
    color: '#2d6a4f',
    rating: 5,
    year: '2025',
    localGuide: true,
    body: 'Very professional through the beginning of the project till the end will recommend 10/10. William was great!',
  },
  {
    id: 'melissa-wright',
    name: 'Melissa Wright',
    initials: 'M',
    color: '#5b9bd5',
    rating: 5,
    year: '2024',
    body: 'Reynolds Roofing did a great job replacing our roof. William was knowledgeable and always available to answer questions and help us through the process. Highly recommend.',
  },
  {
    id: 'penguin',
    name: 'Penguin',
    initials: 'P',
    color: '#1d3557',
    rating: 5,
    year: '2023',
    localGuide: true,
    truncated: true,
    body: 'If there was a way to give 10 stars, I would! I was a repeat customer and both experiences have been phenomenal. William and his team are very knowledgeable, transparent and honest. Very thorough in assessment and walked through options in',
  },
  {
    id: 'gregory-johnson',
    name: 'Gregory Johnson',
    initials: 'G',
    color: '#e63946',
    rating: 5,
    year: '2023',
    tags: ['Roof repair'],
    body: 'I called 4 Roofing companies and Reynolds Roofing was the only one who reached back out to me. I explained my roofing problem and William knew exactly what was needed. Called on Monday 08/29/22 roof repaired on Friday 09/02/22. Excellent work with a 1 year warranty.',
  },
  {
    id: 'alexander-montero',
    name: 'Alexander Montero',
    initials: 'A',
    color: '#6d4aff',
    rating: 5,
    year: '2022',
    tags: ['Roof repair', 'Responsiveness', 'Punctuality', 'Professionalism'],
    body: "This is our second time using Reynold's Roofing and we couldn't be happier with the results and service. We had a leak in our daughter's room so they promptly came out and repaired it. Highly recommend this company!",
  },
  {
    id: 'justin-watson',
    name: 'Justin Watson',
    initials: 'J',
    color: '#3d5a80',
    rating: 5,
    year: '2021',
    truncated: true,
    body: 'The workers showed up on time. Evaluated the repair. Got all the supplies needed. They repaired the roof and verified it with me. The roof looks to be repaired at this time.',
  },
  {
    id: 'anil-ali',
    name: 'Anil Ali',
    initials: 'A',
    color: '#f4a03c',
    rating: 5,
    year: '2020',
    body: 'Called them for roof inspection, they were very professional. Got the job in time. Will definitely recommend them for issues for roofing.',
  },
  {
    id: 'gmail-account',
    name: 'Gmail Account',
    initials: 'G',
    color: '#e06c4e',
    rating: 5,
    year: '2019',
    body: "He did 3 jobs for me, and every one came in under the estimate. they dont do things that arent required, only what's needed. Top quality, and fair price.",
  },
  {
    id: 'diane-douglas',
    name: 'Diane Douglas',
    initials: 'D',
    color: '#c65d3a',
    rating: 5,
    year: '2019',
    truncated: true,
    body: 'We submitted an online request for an estimate on the weekend and the owner called within a few minutes to set a time to look at the roof. It was determined that all that was needed was roof maintenance. That was done while we were away,',
  },
] as const satisfies readonly Testimonial[];

export const featuredTestimonials = [
  testimonials[0],
  testimonials[1],
  testimonials[3],
] as const;
