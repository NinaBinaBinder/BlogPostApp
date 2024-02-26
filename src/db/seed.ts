"use server";

import db from "./connection";
import { postsTable } from "./schema";

const blogPosts = [
  {
    title: "The Benefits of Regular Exercise",
    content:
      "Regular exercise has numerous benefits for both physical and mental health. It can help improve cardiovascular health, strengthen muscles, boost mood, and increase overall energy levels. Additionally, exercise has been linked to reduced stress, anxiety, and depression. Making physical activity a regular part of your routine can lead to a happier and healthier life.",
  },
  {
    title: "Tips for Effective Time Management",
    content:
      "Effective time management is essential for maximizing productivity and reducing stress. One tip is to prioritize tasks based on their importance and deadlines. Additionally, breaking tasks into smaller, manageable chunks can make them feel more manageable and less overwhelming. It's also important to minimize distractions, such as phone notifications or unnecessary meetings, to stay focused and on track. By implementing these tips, you can make the most of your time and achieve your goals more efficiently.",
  },
  {
    title: "The Importance of Sleep for Overall Health",
    content:
      "Sleep is crucial for overall health and well-being. It plays a vital role in various bodily functions, including immune function, metabolism, and cognitive function. Not getting enough sleep can lead to a range of health problems, including increased risk of obesity, heart disease, and diabetes. It can also impair cognitive function, mood, and decision-making abilities. To promote better sleep, it's important to maintain a consistent sleep schedule, create a relaxing bedtime routine, and create a comfortable sleep environment. Prioritizing sleep is essential for optimal health and functioning.",
  },
  {
    title: "The Power of Positive Thinking",
    content:
      "Positive thinking can have a profound impact on our lives. It can help reduce stress, increase resilience, and improve overall well-being. By focusing on the good in any situation and maintaining an optimistic outlook, we can better navigate challenges and setbacks. Positive thinking can also enhance relationships, boost confidence, and foster a sense of gratitude. Incorporating positive thinking into our daily lives can lead to greater happiness and success.",
  },
  {
    title: "Exploring Mindfulness Meditation",
    content:
      "Mindfulness meditation is a practice that involves focusing on the present moment without judgment. It has been shown to have numerous benefits for mental and physical health. Regular meditation can reduce stress, anxiety, and depression, while also improving attention, concentration, and emotional regulation. Additionally, mindfulness meditation has been linked to changes in brain structure associated with increased compassion and empathy. By incorporating mindfulness meditation into our lives, we can cultivate a greater sense of peace, clarity, and overall well-being.",
  },
  {
    title: "The Art of Effective Communication",
    content:
      "Effective communication is essential for building strong relationships, resolving conflicts, and achieving mutual understanding. It involves active listening, clear expression of thoughts and feelings, and empathy for others' perspectives. By practicing active listening and expressing ourselves honestly and respectfully, we can avoid misunderstandings and build trust with others. Effective communication skills are valuable in both personal and professional contexts, enabling us to connect with others on a deeper level and collaborate more effectively.",
  },
  {
    title: "The Importance of Setting Boundaries",
    content:
      "Setting boundaries is essential for maintaining healthy relationships and preserving our well-being. Boundaries define what is acceptable and unacceptable behavior from others, helping us feel safe and respected. Without boundaries, we may feel overwhelmed, resentful, or taken advantage of. Setting clear and assertive boundaries allows us to protect our time, energy, and emotions, while also fostering mutual respect and understanding in our relationships. By establishing and enforcing boundaries, we can create healthier and more fulfilling connections with others.",
  },
  {
    title: "Tips for Cultivating a Growth Mindset",
    content:
      "A growth mindset is the belief that our abilities and intelligence can be developed through dedication and hard work. Cultivating a growth mindset can lead to greater resilience, perseverance, and success. One tip for fostering a growth mindset is to embrace challenges as opportunities for learning and growth, rather than viewing them as threats. Additionally, practicing self-reflection, seeking feedback, and celebrating progress can help reinforce a growth mindset. By adopting a growth mindset, we can unlock our full potential and achieve our goals.",
  },
];

export default async function seedData() {
  blogPosts.map(
    async (post) =>
      await db
        .insert(postsTable)
        .values({ title: post.title, content: post.content })
  );
}
