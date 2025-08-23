"use client";

import { useEffect, useState } from "react";
import { LoginAPI } from "./api/login-api/login-api";
import { useCookies } from "react-cookie";
import { SystemMessageEntity, SystemMessageType } from "@/store/store";
import { GetSystemMessageAPI } from "./api/sm-api/get/sm-get";
import { UpdateSystemMessageAPI } from "./api/sm-api/update/sm-update";

export function SMViewComponent({ type }: { type: SystemMessageType }) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);
    const [sm, setSM] = useState<SystemMessageEntity | undefined>(undefined);
    const [instructions, setInstructions] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getSM = async (_jwt: string) => {
        const { sm: _sm }: { sm: SystemMessageEntity } = await GetSystemMessageAPI(_jwt, type);

        if (!_sm || !_sm.instructions) return;

        setSM(_sm);
        setInstructions(_sm.instructions);
    };

    useEffect(() => {
        const _jwt = cookies.jwt;
        if (_jwt && _jwt !== '') setJwt(_jwt);

        getSM(_jwt);
    }, []);

    useEffect(() => {
        if (sm?.instructions !== instructions && instructions !== '' && !ready) setReady(true);
        else if (ready && (sm?.instructions === instructions || instructions === '')) setReady(false);
    }, [sm, instructions]);

    const update = async () => {
        const { sm: _sm }: { sm: SystemMessageEntity } = await UpdateSystemMessageAPI(jwt, type, instructions);

        if (!_sm) return;

        setSM(_sm);
        setInstructions(_sm.instructions);
    };

    return (
        <div className="dashboard-card text-white">
            <h1 className="home-properties-1-title text-center">
                {`Dashboard ${type}`}
            </h1>
            <textarea
                placeholder="Instructions"
                className="dashboard-input"
                onChange={(event) => setInstructions(event.target.value)}
                value={instructions}
                style={{
                }}
            />
            <button className={ready ? "dashboard-button" : "dashboard-button-disabled"} disabled={!ready} onClick={update}>
                Update
            </button>
        </div>
    );
}

export default function DashboardComponent() {
    return (
        <div className="dashboard-wrapper">
            <h1 className="basic-title" style={{ textAlign: "center", fontSize: 48, paddingTop: 24, paddingBottom: 48 }}>
                Vamos hijodeputa!
            </h1>
            <div className="dashboard-row">
                <SMViewComponent type={"text_own"} />
                <SMViewComponent type={"text_group"} />
            </div>
            <div className="dashboard-row">
                <SMViewComponent type={"voice_own"} />
                <SMViewComponent type={"tecnic_sheet"} />
            </div>
            <div className="dashboard-row">
                <SMViewComponent type={"patient_history"} />
            </div>
        </div>
    );
}
