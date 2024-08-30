
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome/Welcome"
import spellingStyles from "./spelling-bee.css"
import HiveInput from "@/components/spelling-bee/HiveInput";

export default function SpellingBee() {


  return (
    <main className={styles.main}>
        <Navbar />

        <Welcome title={"Spelling Bee"} backgroundColor={"#f7da21"} image={"/games/spelling-bee.svg"} description="How many words can you make with 7 letters?" />

        <div className="spellingBeeContainer">

          <div className="spelling-left">

             <HiveInput></HiveInput>

            <div className="hiveContainer">

              <div className="hive">
                <svg class="hive-cell center" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-center">
                  <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon>
                  <text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">W</text>
                </svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" data-testid="hive-cell-outer"><polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5" data-testid="cell-fill"></polygon><text class="cell-letter" x="50%" y="50%" dy="0.35em" data-testid="cell-letter">t</text></svg>
              </div>

            </div>

          </div>
         

        </div>




       



    </main>
  );
}
