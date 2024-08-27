
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome/Welcome"


export default function Wordle() {
  return (
    <main className={styles.main}>
        <Navbar />
        
      
       
        <Welcome title={"Connections"} backgroundColor={"#b4a8ff"} image={"/games/connections.svg"} description="Group words that share a common thread." />


        

    </main>
  );
}
