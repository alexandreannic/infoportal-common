import {Obj, seq} from '@alexandreannic/ts-utils'

/** @deprecated*/
export const kobo = {
  drcUa: {
    server: {
      prod: '4820279f-6c3d-47ba-8afe-47f86b16ab5d' as const,
    },
    form: {
      safety_incident: 'aAJNkn7v9fRL2XqQCgEkXf',
      ecrec_cashRegistration: 'aE5md7RfHiy4LJmddoFAQH',
      ecrec_cashRegistrationBha: 'aQCGR2fESUNFMYKVHMyAET',
      bn_rapidResponse: 'aMJL9DG8qEcULqTZTKQbrq',
      bn_cashForRentApplication: 'aBupWbhtUmA7so3532tYLa',
      bn_cashForRentRegistration: 'ajNzDaUuLkcEvjQhVsAmao',
      shelter_cashForRepair: 'a9CjhyhTKVojCdArKmw9yM',
      bn_1_mpcaNfi: 'a4Sx3PrFMDAMZEGsyzgJJg',
      bn_1_mpcaNfiMyko: 'a8WAWB9Yxu2jkgk4Ei8GTk',
      bn_1_mpcaNfiNaa: 'aBGVXW2N26DaLehmKneuyB',
      bn_0_mpcaRegNewShort: 'a5kgQdqZLLNTLSmC8DK7Eq',
      bn_0_mpcaReg: 'aEwY33SAtdayNTeHoiJfdg',
      bn_0_mpcaRegNoSig: 'aHuWQPkrC43qBfTmJvoLqg',
      bn_0_mpcaRegESign: 'a8JXohrBDqTdCc86Ysz26r',
      bn_re: 'aKgX4MNs6gCemDQKPeXxY8',
      meal_verificationEcrec: 'aEN2tkQhpsfX4G3i6Re7bi',
      meal_verificationWinterization: 'aAWVLi8bSb2S8bHc5CcL8i',
      meal_visitMonitoring: 'a8GkjWBQDfxVADGHWJDrUw',
      meal_cfmInternal: 'aN3Y8JeH2fU3GthrWAs9FG',
      meal_cfmExternal: 'aJaGLvGEdpYWk5ift8k87y',
      shelter_nta: 'aL8oHMzJJ9soPepvK6YU9E',
      shelter_ta: 'aTP5nwZjpyR7oy7bdMZktC',
      shelter_north: 'aCPdwVnnsYeReynJ7YnLGH',
      protection_hhs2_1: 'aQDZ2xhPUnNd43XzuQucVR',
      protection_hhs3: 'aDmHHT6QzBSwwy9WZcTRrM',
      protection_communityMonitoring: 'aQHBhYgevdzw8TR2Vq2ZdR',
      protection_groupSession: 'a8Tn94arrSaH2FQBhUa9Zo',
      protection_pss: 'a52hN5iiCW73mxqqfmEAfp',
      protection_gbv: 'a5Noq6Wf9a8aE2cmi74FyS',
      protection_hhs1: 'aFU8x6tHksveU2c3hK7RUG' as const,
      partnership_partnersDatabase: 'aLs32U5Qc9HfQ5mxQtsEML',
      partnership_initialQuestionnaire: 'a6u7CBysEz746Hdx6pVLzp',
      partnership_assessment: 'aLD2Xc9cKSY22c5cAP5utT',
      //
      // mealCfmInternal: 'aN3Y8JeH2fU3GthrWAs9FG',
      // mealCfmExternal: 'aJaGLvGEdpYWk5ift8k87y',
      // shelter_cashForRepair: 'a9CjhyhTKVojCdArKmw9yM',
      // shelter_NTA: 'aL8oHMzJJ9soPepvK6YU9E',
      // shelter_TA: 'aTP5nwZjpyR7oy7bdMZktC',
      // bn_Re: 'aKgX4MNs6gCemDQKPeXxY8',
      // bn_RapidResponse: 'aMJL9DG8qEcULqTZTKQbrq',
      // bn_OldMpcaNfi: 'a4Sx3PrFMDAMZEGsyzgJJg',
      // bn_OldMpcaNfiNaa: 'aBGVXW2N26DaLehmKneuyB',
      // bn_OldMpcaNfiMyko: 'a8WAWB9Yxu2jkgk4Ei8GTk',
      // meal_VisitMonitoring: 'a8GkjWBQDfxVADGHWJDrUw',
      // protection_Hhs2_1: 'aQDZ2xhPUnNd43XzuQucVR',
      // protection_Hhs2: 'aRHsewShwZhXiy8jrBj9zf',
      // protection_Hhs1: 'aFU8x6tHksveU2c3hK7RUG',
      // protection_communityMonitoring: 'aQHBhYgevdzw8TR2Vq2ZdR',
      // protection_groupSession: 'a8Tn94arrSaH2FQBhUa9Zo',
      // protection_pss: 'a52hN5iiCW73mxqqfmEAfp',
    }
  }
}

export type KoboFormName = keyof typeof kobo.drcUa.form

/** @deprecated*/
export const koboFormById: Record<string, KoboFormName> = seq(Obj.entries(kobo.drcUa.form)).reduceObject(([k, v]) => [v, k])

/** @deprecated*/
export const koboFormTranslation: Record<KoboFormName, string> = {
  safety_incident: '[Safety] Incident tracker',
  ecrec_cashRegistration: '[Ecrec] Sectoral Cash Registration',
  ecrec_cashRegistrationBha: '[Ecrec] Sectoral Cash Registration BHA',
  bn_rapidResponse: '[Basic Needs] Rapid Response Mechanism',
  bn_cashForRentApplication: '[Basic Needs] Cash for Rent Application',
  bn_cashForRentRegistration: '[Basic Needs] Cash for Rent Registration',
  bn_1_mpcaNfi: '[Basic Needs] v1 Joint MPCA-NFI Registration',
  bn_1_mpcaNfiMyko: '[Basic Needs] v1 Joint MPCA-NFI Registration (Mykolaiv Short Form)',
  bn_1_mpcaNfiNaa: '[Basic Needs] v1 Joint MPCA-NFI Registration Form (NAA Trial)',
  bn_0_mpcaRegNewShort: '[Basic Needs] v0 MPCA Registration (NEW-SHORT 01102022)',
  bn_0_mpcaReg: '[Basic Needs] v0 MPCA Registration',
  bn_0_mpcaRegNoSig: '[Basic Needs] v0 MPCA Registration (GREENLIGHT WITH CONSENT - NO SIGNATURE)',
  bn_0_mpcaRegESign: '[Basic Needs] v0 MPCA Registration (GREENLIGHT WITH ESIGNATURE)',
  bn_re: '[Basic Needs] Registration and Evaluation Form',
  meal_visitMonitoring: '[MEAL] Field Visit Monitoring',
  meal_cfmInternal: '[MEAL] Cfm Internal',
  meal_cfmExternal: '[MEAL] Cfm External',
  meal_verificationEcrec: '[MEAL] Verification EcRec',
  meal_verificationWinterization: '[MEAL] Verification Winterization',
  shelter_cashForRepair: '[Shelter] Cash for Repairs Registration Form',
  shelter_nta: '[Shelter] NTA',
  shelter_ta: '[Shelter] TA',
  shelter_north: '[Shelter] North',
  protection_hhs3: '[Protection] Household Survey',
  protection_hhs2_1: '[Protection] HHS v2',
  protection_communityMonitoring: '[Protection] Community Monitoring',
  protection_groupSession: '[Protection] Group Session',
  protection_pss: '[Protection] PSS',
  protection_hhs1: '[Protection] HHS (old v1)',
  protection_gbv: '[Protection] GBV',
  partnership_assessment: '[Partnership] CBP CSO Assessment',
  partnership_initialQuestionnaire: '[Partnership] CBP CSO Initial Questionnaire',
  partnership_partnersDatabase: '[Partnership] DRC Partners Database',
//
}

export namespace KoboIndex {

  interface ParsedForm {
    name: string
    program?: string
    donors?: string[]
  }

  export const parseFormName = (name: string): ParsedForm => {
    const match = name.match(/^\[(.*?)]\s*(?:\{(.*?)})?\s*(.*)$/)
    if (match) {
      const [, sector, donors, formName] = match
      return {
        program: sector,
        name: formName,
        donors: donors?.split(','),
      }
    }
    return {
      name,
    }
  }

  export const byName = (name: keyof typeof kobo.drcUa.form) => {
    const id = kobo.drcUa.form[name]
    const translation = koboFormTranslation[name]
    return {
      name,
      id,
      translation,
      parsed: parseFormName(translation)
    }
  }

  export const searchById = (id: string) => {
    const name = koboFormById[id]
    const translation = koboFormTranslation[name]
    if (name)
      return {
        name,
        id,
        translation,
      }
  }
}