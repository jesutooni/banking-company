interface Press {
    image: string;
    heading: string;
    body: string;
    location: string;
    date: string;
}
const releases: Press[] = [
    {
        image: "press-release-1",
        heading: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
        body: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
        location: "India",
        date: "06/11/2024",
    },
    {
        image: "press-release-2",
        heading: "YourBank Expands Branch Network with Opening of New Location in Chennai",
        body: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
        location: "India",
        date: "12/11/2024",
    },
    {
        image: "press-release-3",
        heading: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
        body: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
        location: "India",
        date: "24/12/2024",
    },
    {
        image: "press-release-4",
        heading: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
        body: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.',
        location: "India",
        date: "28/12/2024",
    }
]

export default releases;