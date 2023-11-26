import { useState } from "react";
import styles from "./PromptForm.module.css"

type PromptFormProps = {
    onSubmit: (prompt: string, emotion: string) => Promise<void>;
    isLoading: boolean;
  };
  
export default function PromptForm({ onSubmit, isLoading }: PromptFormProps){

    const [prompt, setPrompt] = useState("");
    const [emotion, setEmotion] = useState("");

    return <form className={styles.form} onSubmit={(e)=>{
        e.preventDefault();
        if(prompt =="") return;
        onSubmit(prompt,emotion);
        setPrompt('')
    }}>
        <br/>
        <label>AI does not have emotions of its own, but try adding some: </label>
       <select value={emotion} onChange={e=>{setEmotion(e.target.value)}}>
        <option value="anger">Anger</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="excited">Excited</option>
        <option value="satisfied">Satisfied</option>
        <option value="bored">Bored</option>

        </select>
        <br/>
        <br/>
        <label>Question</label>
        <input className={styles.input} type="text" value={prompt} onChange={e=>{setPrompt(e.target.value)}}></input>
        <input         className={styles.submitButton} type="submit" disabled={isLoading}/>
    </form>
}