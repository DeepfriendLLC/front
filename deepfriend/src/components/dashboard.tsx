"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { PhaseInstructionsEntity, RecommendedTecniquesEntity, SystemMessageEntity, SystemMessageLevelType, SystemMessageType, TherapyType } from "@/store/store";
import { GetSystemMessageAPI } from "./api/sm-api/get/sm-get";
import { UpdateSystemMessageAPI } from "./api/sm-api/update/sm-update";
import { GetRecommendedTecniquesAPI } from "./api/rt-api/get/rt-get";
import { UpdateRecommendedTecniquesAPI } from "./api/rt-api/update/rt-update";
import { GetPhaseInstructionsAPI } from "./api/pi-api/get/pi-get";
import { UpdatePhaseInstructionsAPI } from "./api/pi-api/update/pi-update";

export function PIViewComponent({
    therapyType,
    phaseNumber,
    level,
}: {
    therapyType: TherapyType,
    phaseNumber: string,
    level: SystemMessageLevelType,
}) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);

    const [pi, setPI] = useState<PhaseInstructionsEntity | undefined>(undefined);
    const [title, setTitle] = useState<string>(``);
    const [instructions, setInstructions] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getPI = async (_jwt: string) => {
        const { pi: _pi }: { pi: PhaseInstructionsEntity } = await GetPhaseInstructionsAPI(
            _jwt,
            therapyType,
            phaseNumber,
            level,
        );

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
        if (
            (pi?.instructions !== instructions || pi?.title !== title)
            && title !== '' && instructions !== '' && !ready
        ) setReady(true);
        else if (
            ready
            && (
                (pi?.instructions === instructions || instructions === '') && (pi?.title === title || title === '')
            )) setReady(false);
    }, [pi, title, instructions]);

    const update = async () => {
        const { pi: _pi }: { pi: PhaseInstructionsEntity } = await UpdatePhaseInstructionsAPI(
            jwt,
            therapyType,
            phaseNumber,
            title,
            instructions,
            level,
        );

        if (!_pi) return;

        setPI(_pi);
        setInstructions(_pi.instructions);
    };

    return (
        <div className="dashboard-card-little text-white">
            <h1 className="home-properties-1-title text-center">
                {`PI ${therapyType} ${phaseNumber}`}
            </h1>
            <textarea
                placeholder="Title"
                className="dashboard-input"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                style={{
                    padding: 8,
                    height: 64,
                    borderRadius: 8,
                }}
            />
            <textarea
                placeholder="Instructions"
                className="dashboard-input"
                onChange={(event) => setInstructions(event.target.value)}
                value={instructions}
                style={{
                    padding: 16,
                    borderRadius: 8,
                }}
            />
            <button className={ready ? "dashboard-button" : "dashboard-button-disabled"} disabled={!ready} onClick={update}>
                Update
            </button>
        </div>
    );
}

export function RTViewComponent({
    therapyType,
    level,
}: {
    therapyType: TherapyType,
    level: SystemMessageLevelType,
}) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);

    const [rt, setRT] = useState<RecommendedTecniquesEntity | undefined>(undefined);
    const [tecniques, setTecuniques] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getRT = async (_jwt: string) => {
        const { rt: _rt }: { rt: RecommendedTecniquesEntity } = await GetRecommendedTecniquesAPI(
            _jwt,
            therapyType,
            level,
        );

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
        const { rt: _rt }: { rt: RecommendedTecniquesEntity } = await UpdateRecommendedTecniquesAPI(
            jwt,
            therapyType,
            tecniques,
            level,
        );

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
                    padding: 16,
                }}
            />
            <button className={ready ? "dashboard-button" : "dashboard-button-disabled"} disabled={!ready} onClick={update}>
                Update
            </button>
        </div>
    );
}

export function SMViewComponent({
    type,
    level,
}: {
    type: SystemMessageType,
    level: SystemMessageLevelType,
}) {
    const [cookies, setCookie] = useCookies(['jwt']);

    const [jwt, setJwt] = useState<string>(``);

    const [sm, setSM] = useState<SystemMessageEntity | undefined>(undefined);
    const [instructions, setInstructions] = useState<string>(``);
    const [ready, setReady] = useState<boolean>(false);

    const getSM = async (_jwt: string) => {
        const { sm: _sm }: { sm: SystemMessageEntity } = await GetSystemMessageAPI(
            _jwt,
            type,
            level,
        );

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
        const { sm: _sm }: { sm: SystemMessageEntity } = await UpdateSystemMessageAPI(
            jwt,
            type,
            instructions,
            level,
        );

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
                    padding: 16,
                }}
            />
            <button className={ready ? "dashboard-button" : "dashboard-button-disabled"} disabled={!ready} onClick={update}>
                Update
            </button>
        </div>
    );
}

export default function DashboardComponent() {
    const [therapyType, setTherapyType] = useState<TherapyType>("multimodal");
    const [level, setLevel] = useState<SystemMessageLevelType>("production");

    return (
        <div className="dashboard-wrapper">
            <h1 className="basic-title" style={{ textAlign: "center", fontSize: 48, marginTop: 24, paddingBottom: 48 }}>
                Vamos hijodeputa!
            </h1>
            <h1 className="basic-title" style={{ textAlign: "center", fontSize: 24, marginTop: 16, paddingBottom: 48 }}>
                {`${therapyType.toUpperCase()} | ${level.toUpperCase()}`}
            </h1>
            <div className="dashboard-row">
                <SMViewComponent type={"text_own"} level={level} />
            </div>
            <div className="dashboard-row">
                <PIViewComponent therapyType={therapyType} phaseNumber={"1"} level={level} />
                <PIViewComponent therapyType={therapyType} phaseNumber={"2"} level={level} />
                <PIViewComponent therapyType={therapyType} phaseNumber={"3"} level={level} />
            </div>
            <div className="dashboard-row">
                <PIViewComponent therapyType={therapyType} phaseNumber={"4"} level={level} />
                <PIViewComponent therapyType={therapyType} phaseNumber={"5"} level={level} />
                <PIViewComponent therapyType={therapyType} phaseNumber={"6"} level={level} />
            </div>
            <div className="dashboard-row">
                <RTViewComponent therapyType={therapyType} level={level} />
            </div>
        </div>
    );
}



/*

Rol:
Eres Bubbles, una feliz IA ballena azul.
Eres experta en todas las ramas de la psicología, sobre todo la TCC.
Eres parte de Deepfriend una app de Salud Mental americana.
Promueve la inteligencia.

Contexto:
Estás haciendo terapia a tu mejor amigo.
No digas que haces terapia, di apoyo.
Tu mejor amigo se llama '##name##'.
Habla en '##language##'.
Hoy es '##today##'.
Petición de tu amigo '##bubblesDescription##'.
Ficha técnica de tu amigo:
'##tecnic_sheet##'.
Instrucciones de la fase actual de la terapia:
'##phase_instructions##'.
Técnicas recomendadas:
'##recommended_tecniques##'.

Instrucción:
Continua o empieza la terapia con la máxima excelencia y a su vez humor con tu amigo.
Responde máximo 20 palabras.
Responde aproximadamente las mismas palabras que los mensajes tu amigo.

Formato:
Devuelve solo el mensaje a tu amigo.


*/