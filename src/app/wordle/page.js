
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome/Welcome"


export default function Wordle() {
  return (
    <main className={styles.main}>
        <Navbar />
        
      
       
        <Welcome title={"Wordle"} backgroundColor={"#d3d6da"} image={"/games/wordle.svg"} description="word game" />


        

    </main>
  );
}
