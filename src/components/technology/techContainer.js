import React from "react"
import {Sip} from "./sip"
import {MiTek} from "./miTek"
import {MythBusters} from "./mythBusters"
import {SmartHouse} from "./smartHouse"

export const TechContainer = () => (
    <main className="technology-page App-page">
        <Sip/>
        <MiTek/>
        <MythBusters/>
        <SmartHouse/>
    </main>
);