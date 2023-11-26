// @client
'use client'
import Gallery from './gallery'
import Post from './posts/post'
import Counter from './Counter.client'
import ToDoList from './todo/todolist'
import Dashboard from './dashboard/page'
import Link from '@/node_modules/next/link'
import { useRouter } from '@/node_modules/next/navigation'
import { useState } from 'react'
import PromptForm from './components/PromptForm'
import styles from 'page.module.css'

type Choice = {
  index: number; // or string, depending on your data
  message: {
    content: string;
  };
};

export default function Home() {
  const person={
    name:'John Doe',
    age:24
  }
  const [choices, setChoices] = useState<Choice[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const createQueryString = (name:string, value:string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  
  return (
    <main className={styles.main}>
      <div className={styles.card}>
      <p>Hello from ChatGPT! </p>
      <PromptForm isLoading={isLoading} onSubmit={async(prompt:string, emotion:string)=>{
        setIsLoading(true);
        const response = await fetch('./api/chat-gpt',{
          method: "POST",
          headers: {
            "content-Type": "application/json" 
          },
          body: JSON.stringify({
            prompt,
            emotion
          })
        });
        setIsLoading(false);

        const result = await response.json();
        setChoices(result.choices) }}/>
      {/* <Gallery/> */}
      {/* <Counter/>
      <ToDoList/> 
      <Post/>*/}
      <br/>
     {choices.map((choice)=><p className={styles.response} key={choice.index}>{choice.message.content}</p>)}
      {/* <Link href={{
        pathname:'/dashboard',
        query:{person:JSON.stringify(person)}
      }}>Go To Dashboard</Link> */}


{/* <button onClick={()=>router.push('./dashboard'+ "?" + createQueryString("name", "jaya"))}>Got to Dashboard</button> */}
     
</div>
    </main>
  )
}
