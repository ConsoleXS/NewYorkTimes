
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import { motion } from "framer-motion";





export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        
      
       
        <div className={styles.games}>
          <Card title={"Wordle"} backgroundColor={"#d3d6da"} image={"/games/wordle.svg"} href={"./wordle"}/>
          <Card title={"Connections"} backgroundColor={"#b4a8ff"} image={"/games/connections.svg"} href={"./connections"}/>
          <Card title={"Spelling Bee"} backgroundColor={"#f7da21"} image={"/games/spelling-bee.svg"} href={"./spelling-bee"}/>
          <Card title={"Letter Boxed"} backgroundColor={"#faa6a4"} image={"/games/letter-boxed.svg"} href={"./letter-boxed"}/>
        </div>

        {/* <div className={styles.footer}>
          <div className={styles.footerWrapper}>
              <div className={styles.about  }>
                  <h4>ABOUT NEW YORK TIMES GAMES</h4>
                  <p>Since the launch of The Crossword in 1942, The Times has captivated solvers by providing engaging word and logic games. In 2014, we introduced The Mini Crossword — followed by Spelling Bee, Letter Boxed, Tiles and Vertex. In early 2022, we proudly added Wordle to our collection. We strive to offer puzzles for all skill levels that everyone can enjoy playing every day.</p>
              </div>
          </div>
        </div> */}
        

    </main>
  );
}
