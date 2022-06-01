import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam inventore debitis iusto earum nobis.",
    },
    {
        id: 2,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam inventore debitis iusto earum nobis.",
    },
    {
        id: 3,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam inventore debitis iusto earum nobis.",
    },
])