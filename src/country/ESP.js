import { POSTAL_CODE } from '../constants'

export default {
  postalCodeFrom: POSTAL_CODE,
  fields: [
    {
      field: 'postalCode',
      label: 'postalCode',
      required: true,
      mask: '99999',
      regex: /^\d{5}$/,
      postalCodeAPI: true,
      forgottenURL: 'http://www.correos.es/ss/Satellite/site/Aplicacion_C-1349167812778-1363184049882/includeTemplate=COR_Aplicacion-sidioma=es_ES',
      size: 'small',
    },
    {
      field: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      field: 'number',
      label: 'number',
      required: true,
      size: 'mini',
    },
    {
      field: 'complement',
      label: 'floorAndLetter',
      size: 'large',
    },
    {
      field: 'city',
      label: 'city',
      required: true,
      size: 'large',
    },
    {
      field: 'state',
      label: 'province',
      required: true,
      isUpperCase: false,
      optionsCaption: '',
      options: [
        'Álava',
        'Albacete',
        'Alicante',
        'Almería',
        'Avila',
        'Badajoz',
        'Islas Baleares',
        'Barcelona',
        'Burgos',
        'Cáceres',
        'Cádiz',
        'Castellón',
        'Ciudad Real',
        'Córdoba',
        'La Coruña',
        'Cuenca',
        'Gerona',
        'Granada',
        'Guadalajara',
        'Guipúzcoa',
        'Huelva',
        'Huesca',
        'Jaen',
        'León',
        'Lérida',
        'La Rioja',
        'Lugo',
        'Madrid',
        'Málaga',
        'Murcia',
        'Navarra',
        'Orense',
        'Asturias',
        'Palencia',
        'Las Palmas',
        'Pontevedra',
        'Salamanca',
        'S.C.Tenerife',
        'Cantabria',
        'Segovia',
        'Sevilla',
        'Soria',
        'Tarragona',
        'Teruel',
        'Toledo',
        'Valencia',
        'Valladolid',
        'Vizcaya',
        'Zamora',
        'Zaragoza',
        'Ceuta',
        'Melilla',
      ],
      size: 'large',
    },
  ],
}