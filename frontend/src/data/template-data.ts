import { TemplateEnum } from "@/enums/template-enums";

import TemplateSenderTemp01 from "@/components/senders/template-sender-temp-01";
import TemplateSenderTemp02 from "@/components/senders/template-sender-temp-02";
import TemplateSenderTemp03 from "@/components/senders/template-sender-temp-03";

import Temp01Img from "../../public/images/template-01.png";
import Temp02Img from "../../public/images/template-02.png";
import Temp03Img from "../../public/images/template-03.png";

export const TEMPLATE_DATA = {
    [TemplateEnum.TEMP01]: {
        id: TemplateEnum.TEMP01,
        title: "USPTO Examination Notice (Standard)",
        component: TemplateSenderTemp01,
        previewImage: Temp01Img,
    },
    [TemplateEnum.TEMP02]: {
        id: TemplateEnum.TEMP02,
        title: "USPTO Examination Notice (Formal Compliance)",
        component: TemplateSenderTemp02,
        previewImage: Temp02Img,
    },
    [TemplateEnum.TEMP03]: {
        id: TemplateEnum.TEMP03,
        title: "USPTO Examination Notice (Legal Enforcement)",
        component: TemplateSenderTemp03,
        previewImage: Temp03Img,
    },
};
