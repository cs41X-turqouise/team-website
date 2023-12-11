import React from "react";
import Header from "../misc/Header";
import LabOutline from "./LabOutline";
import GroupLabs from "./GroupLabs.js";

const lab1Outline = {
    title: "Lab 1 - Group Outline",
    embed: <iframe className="h-3/4 w-2/5 bg-white" src="https://docs.google.com/document/d/e/2PACX-1vRjZ518UuUycZeqBn0_T2tSixevYt3uTjIaM-ekPpmGY-EdErJK_4mOVTdVnE63DzfuVG6Fqs50tkAY/pub?embedded=true"></iframe>,
    download: "https://drive.google.com/file/d/1umswBVYoy4J67qym-Uj9u3Mn3wNqFQnv/view?usp=sharing"
};

const lab2Outline = {
    title: "Lab 2 - Group",
    embed: <iframe className="h-3/4 w-2/5 bg-white" src="https://docs.google.com/document/d/e/2PACX-1vQmlN6EyEakqppZf_Dlq7E79GJaX0yhw_19x9ap8kyGxqi9v4QUzBy8rH53w0Jl66u9PpPg_Hh82utw/pub?embedded=true"></iframe>,
    download: "https://drive.google.com/file/d/1PkP9BU5EFGjT0acqMYHR96FmAH2n0N6r/view?usp=sharing"
};

const labs1v1 = [
    {
        title: "Patrick Meagher",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTa4tyqDp_o-8nj-Ru464CmB7P-MTE6gC1JRAeOnHRCltzauJruJyhTjP6PlUmbZ-A1_8aVWQcLZutY/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1umswBVYoy4J67qym-Uj9u3Mn3wNqFQnv/view?usp=sharing"
    },
    {
        title: "Christian Woodington",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vRzdBgg5RS57Tdw_9TknKkTinJbAZe65ro0Kw7vlByeal5DzvvcmSdHNqdxEl7SZxgqyneX-q7_aUt-/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1HI6sGRuyn_BEH18F7djy7WE852ZE2Nyt/view?usp=sharing"
    },
    {
        title: "Benjamin Johnson",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTQiITazzKB1BKunCq__jZtMzgJoMgTYTT3RuPvMBMeVszuJE0WL1E_2uNIaK-XQGdifidg1-GG_joh/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1EZkW6nYH8LrlG9iUzrzSz2fa5V5KCPY9/view?usp=sharing"
    },
    {
        title: "Thomas Reynolds",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTKfxykSibzl8kv6qsP8PQsv1_Wmbub8GT3Apsx8eg9vi9sXDFK_RWxkTsv9K-0CD7Zpwi9y83XbxLy/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1oIpDMad7hvglmm3s45GnjttOYiJchumE/view?usp=sharing"
    },
    {
        title: "Evan Goldberg",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQCQpujKOPfC4gPcvW8RuGzjSHdoiWYIj74GSckh-iqggTfCewvSUvFMsiorgy8cqOtYH8w6MvegmSm/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1zfJYy_95SVX3t8pWlTlelrqLHLZxjzs5/view?usp=sharing"
    },
    {
        title: "Prestin Bell",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQEl3_r9rOKoscooYldyNiWKaNtEV-SWArMrD6-Q5DXkN3R-UWmNcQq6VUcDK83Wcp8JbmC6st8FcJY/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1vK_LuALaWthphjh41lxuXbiqigBwPXHJ/view?usp=sharing"
    }
];

const labs1v2 = [
    {
        title: "Patrick Meagher",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTp7NvfOKCQwHttFmRGBWeI989sbP1F-rHWOqPX30FsOGaSLVmX5tEc-tVhfSdofJsTlPLexhXWGucD/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1Vuk0E5cg7Rf7PuXFYo4hNGJNYynTEZ9u/view?usp=sharing"
    },
    {
        title: "Christian Woodington",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vRVn22zK7-1RcdmjKHEfm__LS1o0d_WOQFRGEkCCZtDh7dnUT-T_RT66MxJwdlW_7576j2fwNQ2sUEq/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1ChQOtzBO-ZfTwXDyIhrgJ_Qo3zP8XKWM/view?usp=sharing"
    },
    {
        title: "Benjamin Johnson",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ93o_rn5tPAPfeBn8FxVhtotBpWzrwazign9Kqqozq_9L8P2Zgr-QQBQAybbOMW0nccFfK7_BBD3OQ/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/168DKoOxpSmgyMgxESSSPbwFC2Fzp81x1/view?usp=sharing"
    },
    {
        title: "Thomas Reynolds",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vScn5vjjrLUa5-2K4pAFXPScS2bNQzGdnVPY74_8qrNyQsd51HTeWHRJQ9dWY2UbeUNQlXDRdt3fNDl/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1XVikG1qybfkgOJLmPa7o7w3gcfaN-gxP/view?usp=sharing"
    },
    {
        title: "Evan Goldberg",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQCQpujKOPfC4gPcvW8RuGzjSHdoiWYIj74GSckh-iqggTfCewvSUvFMsiorgy8cqOtYH8w6MvegmSm/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1zfJYy_95SVX3t8pWlTlelrqLHLZxjzs5/view?usp=sharing"
    },
    {
        title: "Prestin Bell",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vSPu4qJNXaYdmSKGsBpwNQaFKjKnN68QfBVd-e_nDLETm0cfYojvILpOXHppTYlGcQ172mF1NGc4y5a/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1BJX4A580nZd_2onjQpB_Ra2_Y6WguguA/view?usp=sharing"
    }
];

const labs2v1 = [
    {
        title: "Patrick Meagher",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQo9kPPWUbALYiNxP50G54uvLAyZR_58yt3HU2Tz-IAW35VVcdaZBC29xTBCS-PIdDzlfhiluvNkEAr/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1VENoKvekIseWpjAgPpoL0tT_FMQ4VSB3/view?usp=sharing"
    },
    {
        title: "Christian Woodington",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vR16jnLTecCoe41i1jaqEgmlmNeCaV5wxhQR0fKZBCTsR82QUmfPLJ4hobbLyGBGBLWfGPuZF3YmVq7/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1ChQOtzBO-ZfTwXDyIhrgJ_Qo3zP8XKWM/view?usp=sharing"
    },
    {
        title: "Benjamin Johnson",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQbIfF29CcsaOLv3CywP9JIG-rpQhpgTyl1o5FA5GEjBNs_ISB0E2ZUHojmbR5lnajAa2ArY3f-b8q2/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/168DKoOxpSmgyMgxESSSPbwFC2Fzp81x1/view?usp=sharing"
    },
    {
        title: "Thomas Reynolds",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTd6GzSJaUrygtUDckZfygHCOTGmRPlBBXumX8LYd0qHaPyUdQNgM-1RFXWa5QJPK7JVozYvzG0nWnG/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1XVikG1qybfkgOJLmPa7o7w3gcfaN-gxP/view?usp=sharing"
    },
    {
        title: "Evan Goldberg",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQn4ZFPeum4IrQUMXI5DsOIgaNzr_QosCzzeIJzJjoWs2nMdUjoiKRmakxoZdB0qXTwgbcESrPSD_i6/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1k1CkIX_kJL6V63GIJMH5gIaKb1pO8gpM/view?usp=sharing"
    },
    {
        title: "Prestin Bell",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vS2dPp-_dVL580kkMrScK6rDmc_zND6uzchO0f5WI-qGLUaVu4o8GAQ9PyYDgoqcUj_d7LdgJQcBAI3/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1ALCpFjrpK1RRpl5KZFiokriV4ANvTc4B/view?usp=sharing"
    }
];

const labs2v2 = [
    {
        title: "Patrick Meagher",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vTjSfMZijwF_npLfCCfFSn1541aEgdM39ay4rBpS4MROeIrKoaGrlkXzfYIE2JIDXBR88XtIBXU193F/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1H5heZWEWCJpFwcU_3B_o3AuxtuiHtOdj/view?usp=sharing"
    },
    {
        title: "Christian Woodington",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vRoy5uNKhoHeKjdYI9qb9vit1MXS_M2EvVpCsFEOb8edQ_06qIYEyXXezABjbwmpahdIASx0npmZrnE/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1BzEiOlUWwogLn8izQPiRnKjcU0fRauzg/view?usp=sharing"
    },
    {
        title: "Benjamin Johnson",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQH1kkAIfdl2CyC-rNtyrPDNm4B88OXWYjfJgrO_1PvkWYhgzDeCGuedeFhnEEiJl2Rgf3RTRoQsAq-/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1CImukVJhvyYrnS6bGbFf5wYHRE63b1KF/view?usp=sharing"
    },
    {
        title: "Thomas Reynolds",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQ-MvY7q8q6_YhEadI6Eu5heGdiXwxTRRYP8pyigQ2ecx0YVWZIhLFueARQHA9BlNsIvopCnso-0Z-w/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1kc9M0hEav9G0YcFoVJ8RV4LSUz3zQT_Z/view?usp=sharing"
    },
    {
        title: "Evan Goldberg",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vQn4ZFPeum4IrQUMXI5DsOIgaNzr_QosCzzeIJzJjoWs2nMdUjoiKRmakxoZdB0qXTwgbcESrPSD_i6/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1k1CkIX_kJL6V63GIJMH5gIaKb1pO8gpM/view?usp=sharing"
    },
    {
        title: "Prestin Bell",
        embed: <iframe src="https://docs.google.com/document/d/e/2PACX-1vS2dPp-_dVL580kkMrScK6rDmc_zND6uzchO0f5WI-qGLUaVu4o8GAQ9PyYDgoqcUj_d7LdgJQcBAI3/pub?embedded=true"></iframe>,
        download: "https://drive.google.com/file/d/1ALCpFjrpK1RRpl5KZFiokriV4ANvTc4B/view?usp=sharing"
    }
];

const Labs = () => {
    return (
        <>
            <Header header="Labs" />

            <div className="flex flex-col justify-start items-center h-screen">
                <LabOutline data={lab1Outline} />
            </div>

            <h1 className="text-3xl text-center">Lab 1 Reports v1</h1>
            <div className="flex flex-row items-center flex-wrap justify-items-center justify-center mb-20">
                {labs1v1.map((lab, key) =>
                    <GroupLabs data={lab} key={key} />
                )}
            </div>

            <h1 className="text-3xl text-center">Lab 1 Reports v2</h1>
            <div className="flex flex-row items-center flex-wrap justify-items-center justify-center mb-20">
                {labs1v2.map((lab, key) =>
                    <GroupLabs data={lab} key={key} />
                )}
            </div>

            <div className="flex flex-col justify-start items-center h-screen">
                <LabOutline data={lab2Outline} />
            </div>

            <h1 className="text-3xl text-center">Lab 2 Reports v1</h1>
            <div className="flex flex-row items-center flex-wrap justify-items-center justify-center mb-20">
                {labs2v1.map((lab, key) =>
                    <GroupLabs data={lab} key={key} />
                )}
            </div>

            <h1 className="text-3xl text-center">Lab 2 Reports v2</h1>
            <div className="flex flex-row items-center flex-wrap justify-items-center justify-center mb-20">
                {labs2v2.map((lab, key) =>
                    <GroupLabs data={lab} key={key} />
                )}
            </div>

            <h1 className="text-3xl text-center">Lab 3</h1>
            <a className="underline text-center text-lg justify-center flex flex-row mb-20" rel="noreferrer" href="https://github.com/cs41X-turqouise/sound-map-mfvn/wiki" target="_blank">Visit Wiki Page</a>
        </>
    );
};

export default Labs;
