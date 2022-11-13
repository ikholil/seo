import globe from '../public/images/pricing/globe.png'
import rocket from '../public/images/pricing/rocket.png'
import union from '../public/images/pricing/union.png'

export const priceplan = [
    {
        id:1, 
        title: 'Basic Plan',
        price: 256,
        features: ['Keyword Reseurch', 'Backlinks', 'Website Speed', 'Off-Page SEO', 'Website Speed'],
        bg:globe
    },
    {
        id:2, 
        title: 'Standard Plan',
        price: 356,
        features: ['Keyword Reseurch', 'Backlinks', 'Website Speed', 'Off-Page SEO', 'Website Speed'],
        bg:rocket
    },
    {
        id:3, 
        title: 'Premium Plan',
        price: 856,
        features: ['Keyword Reseurch', 'Backlinks', 'Website Speed', 'Off-Page SEO', 'Website Speed'],
        bg: union
    },
]