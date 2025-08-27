"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { PhaseInstructionsEntity, RecommendedTecniquesEntity, SystemMessageEntity, SystemMessageType, TherapyType } from "@/store/store";
import { GetSystemMessageAPI } from "./api/sm-api/get/sm-get";
import { UpdateSystemMessageAPI } from "./api/sm-api/update/sm-update";
import { GetRecommendedTecniquesAPI } from "./api/rt-api/get/rt-get";
import { UpdateRecommendedTecniquesAPI } from "./api/rt-api/update/rt-update";
import { GetPhaseInstructionsAPI } from "./api/pi-api/get/pi-get";
import { UpdatePhaseInstructionsAPI } from "./api/pi-api/update/pi-update";

export function PIViewComponent({ therapyType, phaseNumber }: { therapyType: TherapyType, phaseNumber: string }) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);

    const [pi, setPI] = useState<PhaseInstructionsEntity | undefined>(undefined);
    const [title, setTitle] = useState<string>(``);
    const [instructions, setInstructions] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getPI = async (_jwt: string) => {
        const { pi: _pi }: { pi: PhaseInstructionsEntity } = await GetPhaseInstructionsAPI(_jwt, therapyType, phaseNumber);

        if (!_pi || !_pi.title || !_pi.instructions) return;

        setPI(_pi);
        setTitle(_pi.title);
        setInstructions(_pi.instructions);
    };

    useEffect(() => {
        const _jwt = cookies.jwt;
        if (_jwt && _jwt !== '') setJwt(_jwt);

        getPI(_jwt);
    }, []);

    useEffect(() => {
        if ((pi?.instructions !== instructions || pi?.title !== title) && title !== '' && instructions !== '' && !ready) setReady(true);
        else if (ready && ((pi?.instructions === instructions || instructions === '') || (pi?.title === title || title === ''))) setReady(false);
    }, [pi, title, instructions]);

    const update = async () => {
        const { pi: _pi }: { pi: PhaseInstructionsEntity } = await UpdatePhaseInstructionsAPI(jwt, therapyType, phaseNumber, title, instructions);

        if (!_pi) return;

        setPI(_pi);
        setInstructions(_pi.instructions);
    };

    return (
        <div className="dashboard-card text-white">
            <h1 className="home-properties-1-title text-center">
                {`PI ${therapyType} ${phaseNumber}`}
            </h1>
            <textarea
                placeholder="Title"
                className="dashboard-input"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                style={{
                    height: 64,
                }}
            />
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

export function RTViewComponent({ therapyType }: { therapyType: TherapyType }) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);

    const [rt, setRT] = useState<RecommendedTecniquesEntity | undefined>(undefined);
    const [tecniques, setTecuniques] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getRT = async (_jwt: string) => {
        const { rt: _rt }: { rt: RecommendedTecniquesEntity } = await GetRecommendedTecniquesAPI(_jwt, therapyType);

        if (!_rt || !_rt.tecniques) return;

        setRT(_rt);
        setTecuniques(_rt.tecniques);
    };

    useEffect(() => {
        const _jwt = cookies.jwt;
        if (_jwt && _jwt !== '') setJwt(_jwt);

        getRT(_jwt);
    }, []);

    useEffect(() => {
        if (rt?.tecniques !== tecniques && tecniques !== '' && !ready) setReady(true);
        else if (ready && (rt?.tecniques === tecniques || tecniques === '')) setReady(false);
    }, [rt, tecniques]);

    const update = async () => {
        const { rt: _rt }: { rt: RecommendedTecniquesEntity } = await UpdateRecommendedTecniquesAPI(jwt, therapyType, tecniques);

        if (!_rt) return;

        setRT(_rt);
        setTecuniques(_rt.tecniques);
    };

    return (
        <div className="dashboard-card text-white">
            <h1 className="home-properties-1-title text-center">
                {`RT ${therapyType}`}
            </h1>
            <textarea
                placeholder="Instructions"
                className="dashboard-input"
                onChange={(event) => setTecuniques(event.target.value)}
                value={tecniques}
                style={{
                }}
            />
            <button className={ready ? "dashboard-button" : "dashboard-button-disabled"} disabled={!ready} onClick={update}>
                Update
            </button>
        </div>
    );
}

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
                {`SM ${type}`}
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
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"1"} />
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"2"} />
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"3"} />
            </div>
            <div className="dashboard-row">
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"4"} />
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"5"} />
                <PIViewComponent therapyType={"multimodal"} phaseNumber={"6"} />
            </div>
            <div className="dashboard-row">
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"1"} />
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"2"} />
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"3"} />
            </div>
            <div className="dashboard-row">
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"4"} />
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"5"} />
                <PIViewComponent therapyType={"cognitive_behavioral"} phaseNumber={"6"} />
            </div>
            <div className="dashboard-row">
                <RTViewComponent therapyType={"multimodal"} />
                <RTViewComponent therapyType={"cognitive_behavioral"} />
            </div>
            <div className="dashboard-row">
                <SMViewComponent type={"text_own"} />
                <SMViewComponent type={"voice_own"} />
            </div>
        </div>
    );
}
