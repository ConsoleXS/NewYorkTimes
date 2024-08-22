
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";





export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        
      
       
        <div className={styles.games}>
          <Card title={"Wordle"} backgroundColor={"#d3d6da"} image={"/games/wordle.svg"}/>
          <Card title={"Connections"} backgroundColor={"#b4a8ff"} image={"/games/connections.svg"}/>
          <Card title={"Spelling Bee"} backgroundColor={"#f7da21"} image={"/games/spelling-bee.svg"}/>
          <Card title={"Letter Boxed"} backgroundColor={"#faa6a4"} image={"/games/letter-boxed.svg"}/>
          
        </div>

    </main>
  );
}
