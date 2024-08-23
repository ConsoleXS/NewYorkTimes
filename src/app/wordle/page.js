
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome/Welcome"


export default function Wordle() {
  return (
    <main className={styles.main}>
        <Navbar />
        
      
       
        <Welcome title={"Wordle"} backgroundColor={"#e3e3e1"} image={"/games/wordle.svg"} description="Get 6 chances to guess a 5-letter word." />


        

    </main>
  );
}
