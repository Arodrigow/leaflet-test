import { sfBHSB, sfMataAtlantica, sfHidrografia_BHSB, sfSolos } from './shapefileData'

export const BHSB = { 
    legend: [
        { name: 'BH São Benedito', color: '#de2d26' }
    ], 
    legendType: 'line', 
    shape: sfBHSB 
}

export const Hidrografia_BHSB = {
    legend: [
    { name: 'Córrego São Benedito', color: '#2b8cbe' }
    ], 
    legendType: 'line'
    , shape: sfHidrografia_BHSB
}

export const Solos = {
    legend: [
    { name: 'Latossolo vermelho-amarelo distrófico', color: '#8c510a' }
    ], 
    legendType: 'square',
    shape: sfSolos
}

export const MataAtlantica = {
    legend: [
        { name: 'Áreas Antropizadas', color: '#fdae61', },
        { name: 'Outros Usos', color: '#ffffbf' },
        { name: 'Floresta Atlântica', color: '#1a9641', }
    ], 
    legendType: 'square',
    shape: sfMataAtlantica
}