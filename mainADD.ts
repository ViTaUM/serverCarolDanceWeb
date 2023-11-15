import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const assentosData = [
    { id: 1, name: 'A1', isAvailable: true, valor: '30,00' },
    { id: 2, name: 'A2', isAvailable: true, valor: '30,00' },
    { id: 3, name: 'A3', isAvailable: true, valor: '30,00' },
    { id: 4, name: 'A4', isAvailable: true, valor: '30,00' },
    { id: 5, name: 'A5', isAvailable: true, valor: '30,00' },
    { id: 6, name: 'A6', isAvailable: true, valor: '30,00' },
    { id: 7, name: 'A7', isAvailable: true, valor: '30,00' },
    { id: 8, name: 'A8', isAvailable: true, valor: '30,00' },
    { id: 9, name: 'A9', isAvailable: true, valor: '30,00' },
    { id: 10, name: 'A10', isAvailable: true, valor: '30,00' },
    { id: 11, name: 'A11', isAvailable: true, valor: '30,00' },
    { id: 12, name: 'A12', isAvailable: true, valor: '30,00' },
    { id: 13, name: 'A13', isAvailable: true, valor: '30,00' },
    { id: 14, name: 'A14', isAvailable: true, valor: '30,00' },
    { id: 15, name: 'A15', isAvailable: true, valor: '30,00' },
    { id: 16, name: 'A16', isAvailable: true, valor: '30,00' },
    { id: 17, name: 'A17', isAvailable: true, valor: '30,00' },
    { id: 18, name: 'A18', isAvailable: true, valor: '30,00' },
    { id: 19, name: 'A19', isAvailable: true, valor: '30,00' },
    { id: 20, name: 'A20', isAvailable: true, valor: '30,00' },
    { id: 21, name: 'A21', isAvailable: true, valor: '30,00' },
    { id: 22, name: 'A22', isAvailable: true, valor: '30,00' },
    { id: 23, name: 'B1', isAvailable: true, valor: '30,00' },
    { id: 24, name: 'B2', isAvailable: true, valor: '30,00' },
    { id: 25, name: 'B3', isAvailable: true, valor: '30,00' },
    { id: 26, name: 'B4', isAvailable: true, valor: '30,00' },
    { id: 27, name: 'B5', isAvailable: true, valor: '30,00' },
    { id: 28, name: 'B6', isAvailable: true, valor: '30,00' },
    { id: 29, name: 'B7', isAvailable: true, valor: '30,00' },
    { id: 30, name: 'B8', isAvailable: true, valor: '30,00' },
    { id: 31, name: 'B9', isAvailable: true, valor: '30,00' },
    { id: 32, name: 'B10', isAvailable: true, valor: '30,00' },
    { id: 33, name: 'B11', isAvailable: true, valor: '30,00' },
    { id: 34, name: 'B12', isAvailable: true, valor: '30,00' },
    { id: 35, name: 'B13', isAvailable: true, valor: '30,00' },
    { id: 36, name: 'B14', isAvailable: true, valor: '30,00' },
    { id: 37, name: 'B15', isAvailable: true, valor: '30,00' },
    { id: 38, name: 'B16', isAvailable: true, valor: '30,00' },
    { id: 39, name: 'B17', isAvailable: true, valor: '30,00' },
    { id: 40, name: 'B18', isAvailable: true, valor: '30,00' },
    { id: 41, name: 'B19', isAvailable: true, valor: '30,00' },
    { id: 42, name: 'B20', isAvailable: true, valor: '30,00' },
    { id: 43, name: 'B21', isAvailable: true, valor: '30,00' },
    { id: 44, name: 'B22', isAvailable: true, valor: '30,00' },
    { id: 45, name: 'B23', isAvailable: true, valor: '30,00' },
    { id: 46, name: 'B24', isAvailable: true, valor: '30,00' },
    { id: 47, name: 'C1', isAvailable: true, valor: '30,00' },
    { id: 48, name: 'C2', isAvailable: true, valor: '30,00' },
    { id: 49, name: 'C3', isAvailable: true, valor: '30,00' },
    { id: 50, name: 'C4', isAvailable: true, valor: '30,00' },
    { id: 51, name: 'C5', isAvailable: true, valor: '30,00' },
    { id: 52, name: 'C6', isAvailable: true, valor: '30,00' },
    { id: 53, name: 'C7', isAvailable: true, valor: '30,00' },
    { id: 54, name: 'C8', isAvailable: true, valor: '30,00' },
    { id: 55, name: 'C9', isAvailable: true, valor: '30,00' },
    { id: 56, name: 'C10', isAvailable: true, valor: '30,00' },
    { id: 57, name: 'C11', isAvailable: true, valor: '30,00' },
    { id: 58, name: 'C12', isAvailable: true, valor: '30,00' },
    { id: 59, name: 'C13', isAvailable: true, valor: '30,00' },
    { id: 60, name: 'C14', isAvailable: true, valor: '30,00' },
    { id: 61, name: 'C15', isAvailable: true, valor: '30,00' },
    { id: 62, name: 'C16', isAvailable: true, valor: '30,00' },
    { id: 63, name: 'C17', isAvailable: true, valor: '30,00' },
    { id: 64, name: 'C18', isAvailable: true, valor: '30,00' },
    { id: 65, name: 'C19', isAvailable: true, valor: '30,00' },
    { id: 66, name: 'C20', isAvailable: true, valor: '30,00' },
    { id: 67, name: 'C21', isAvailable: true, valor: '30,00' },
    { id: 68, name: 'C22', isAvailable: true, valor: '30,00' },
    { id: 69, name: 'D1', isAvailable: true, valor: '30,00' },
    { id: 70, name: 'D2', isAvailable: true, valor: '30,00' },
    { id: 71, name: 'D3', isAvailable: true, valor: '30,00' },
    { id: 72, name: 'D4', isAvailable: true, valor: '30,00' },
    { id: 73, name: 'D5', isAvailable: true, valor: '30,00' },
    { id: 74, name: 'D6', isAvailable: true, valor: '30,00' },
    { id: 75, name: 'D7', isAvailable: true, valor: '30,00' },
    { id: 76, name: 'D8', isAvailable: true, valor: '30,00' },
    { id: 77, name: 'D9', isAvailable: true, valor: '30,00' },
    { id: 78, name: 'D10', isAvailable: true, valor: '30,00' },
    { id: 79, name: 'D11', isAvailable: true, valor: '30,00' },
    { id: 80, name: 'D12', isAvailable: true, valor: '30,00' },
    { id: 81, name: 'D13', isAvailable: true, valor: '30,00' },
    { id: 82, name: 'D14', isAvailable: true, valor: '30,00' },
    { id: 83, name: 'D15', isAvailable: true, valor: '30,00' },
    { id: 84, name: 'D16', isAvailable: true, valor: '30,00' },
    { id: 85, name: 'D17', isAvailable: true, valor: '30,00' },
    { id: 86, name: 'D18', isAvailable: true, valor: '30,00' },
    { id: 87, name: 'D19', isAvailable: true, valor: '30,00' },
    { id: 88, name: 'D20', isAvailable: true, valor: '30,00' },
    { id: 89, name: 'D21', isAvailable: true, valor: '30,00' },
    { id: 90, name: 'D22', isAvailable: true, valor: '30,00' },
    { id: 91, name: 'D23', isAvailable: true, valor: '30,00' },
    { id: 92, name: 'D24', isAvailable: true, valor: '30,00' },
    { id: 93, name: 'E1', isAvailable: true, valor: '30,00' },
    { id: 94, name: 'E2', isAvailable: true, valor: '30,00' },
    { id: 95, name: 'E3', isAvailable: true, valor: '30,00' },
    { id: 96, name: 'E4', isAvailable: true, valor: '30,00' },
    { id: 97, name: 'E5', isAvailable: true, valor: '30,00' },
    { id: 98, name: 'E6', isAvailable: true, valor: '30,00' },
    { id: 99, name: 'E7', isAvailable: true, valor: '30,00' },
    { id: 100, name: 'E8', isAvailable: true, valor: '30,00' },
    { id: 101, name: 'E9', isAvailable: true, valor: '30,00' },
    { id: 102, name: 'E10', isAvailable: true, valor: '30,00' },
    { id: 103, name: 'E11', isAvailable: true, valor: '30,00' },
    { id: 104, name: 'E12', isAvailable: true, valor: '30,00' },
    { id: 105, name: 'E13', isAvailable: true, valor: '30,00' },
    { id: 106, name: 'E14', isAvailable: true, valor: '30,00' },
    { id: 107, name: 'E15', isAvailable: true, valor: '30,00' },
    { id: 108, name: 'E16', isAvailable: true, valor: '30,00' },
    { id: 109, name: 'E17', isAvailable: true, valor: '30,00' },
    { id: 110, name: 'E18', isAvailable: true, valor: '30,00' },
    { id: 111, name: 'E19', isAvailable: true, valor: '30,00' },
    { id: 112, name: 'E20', isAvailable: true, valor: '30,00' },
    { id: 113, name: 'E21', isAvailable: true, valor: '30,00' },
    { id: 114, name: 'E22', isAvailable: true, valor: '30,00' },
    { id: 115, name: 'F1', isAvailable: true, valor: '30,00' },
    { id: 116, name: 'F2', isAvailable: true, valor: '30,00' },
    { id: 117, name: 'F3', isAvailable: true, valor: '30,00' },
    { id: 118, name: 'F4', isAvailable: true, valor: '30,00' },
    { id: 119, name: 'F5', isAvailable: true, valor: '30,00' },
    { id: 120, name: 'F6', isAvailable: true, valor: '30,00' },
    { id: 121, name: 'F7', isAvailable: true, valor: '30,00' },
    { id: 122, name: 'F8', isAvailable: true, valor: '30,00' },
    { id: 123, name: 'F9', isAvailable: true, valor: '30,00' },
    { id: 124, name: 'F10', isAvailable: true, valor: '30,00' },
    { id: 125, name: 'F11', isAvailable: true, valor: '30,00' },
    { id: 126, name: 'F12', isAvailable: true, valor: '30,00' },
    { id: 127, name: 'F13', isAvailable: true, valor: '30,00' },
    { id: 128, name: 'F14', isAvailable: true, valor: '30,00' },
    { id: 129, name: 'F15', isAvailable: true, valor: '30,00' },
    { id: 130, name: 'F16', isAvailable: true, valor: '30,00' },
    { id: 131, name: 'F17', isAvailable: true, valor: '30,00' },
    { id: 132, name: 'F18', isAvailable: true, valor: '30,00' },
    { id: 133, name: 'F19', isAvailable: true, valor: '30,00' },
    { id: 134, name: 'F20', isAvailable: true, valor: '30,00' },
    { id: 135, name: 'F21', isAvailable: true, valor: '30,00' },
    { id: 136, name: 'F22', isAvailable: true, valor: '30,00' },
    { id: 137, name: 'F23', isAvailable: true, valor: '30,00' },
    { id: 138, name: 'F24', isAvailable: true, valor: '30,00' },
    { id: 139, name: 'G1', isAvailable: true, valor: '30,00' },
    { id: 140, name: 'G2', isAvailable: true, valor: '30,00' },
    { id: 141, name: 'G3', isAvailable: true, valor: '30,00' },
    { id: 142, name: 'G4', isAvailable: true, valor: '30,00' },
    { id: 143, name: 'G5', isAvailable: true, valor: '30,00' },
    { id: 144, name: 'G6', isAvailable: true, valor: '30,00' },
    { id: 145, name: 'G7', isAvailable: true, valor: '30,00' },
    { id: 146, name: 'G8', isAvailable: true, valor: '30,00' },
    { id: 147, name: 'G9', isAvailable: true, valor: '30,00' },
    { id: 148, name: 'G10', isAvailable: true, valor: '30,00' },
    { id: 149, name: 'G11', isAvailable: true, valor: '30,00' },
    { id: 150, name: 'G12', isAvailable: true, valor: '30,00' },
    { id: 151, name: 'G13', isAvailable: true, valor: '30,00' },
    { id: 152, name: 'G14', isAvailable: true, valor: '30,00' },
    { id: 153, name: 'G15', isAvailable: true, valor: '30,00' },
    { id: 154, name: 'G16', isAvailable: true, valor: '30,00' },
    { id: 155, name: 'G17', isAvailable: true, valor: '30,00' },
    { id: 156, name: 'G18', isAvailable: true, valor: '30,00' },
    { id: 157, name: 'G19', isAvailable: true, valor: '30,00' },
    { id: 158, name: 'G20', isAvailable: true, valor: '30,00' },
    { id: 159, name: 'G21', isAvailable: true, valor: '30,00' },
    { id: 160, name: 'G22', isAvailable: true, valor: '30,00' },
    { id: 161, name: 'H1', isAvailable: true, valor: '30,00' },
    { id: 162, name: 'H2', isAvailable: true, valor: '30,00' },
    { id: 163, name: 'H3', isAvailable: true, valor: '30,00' },
    { id: 164, name: 'H4', isAvailable: true, valor: '30,00' },
    { id: 165, name: 'H5', isAvailable: true, valor: '30,00' },
    { id: 166, name: 'H6', isAvailable: true, valor: '30,00' },
    { id: 167, name: 'H7', isAvailable: true, valor: '30,00' },
    { id: 168, name: 'H8', isAvailable: true, valor: '30,00' },
    { id: 169, name: 'H9', isAvailable: true, valor: '30,00' },
    { id: 170, name: 'H10', isAvailable: true, valor: '30,00' },
    { id: 171, name: 'H11', isAvailable: true, valor: '30,00' },
    { id: 172, name: 'H12', isAvailable: true, valor: '30,00' },
    { id: 173, name: 'H13', isAvailable: true, valor: '30,00' },
    { id: 174, name: 'H14', isAvailable: true, valor: '30,00' },
    { id: 175, name: 'H15', isAvailable: true, valor: '30,00' },
    { id: 176, name: 'H16', isAvailable: true, valor: '30,00' },
    { id: 177, name: 'H17', isAvailable: true, valor: '30,00' },
    { id: 178, name: 'H18', isAvailable: true, valor: '30,00' },
    { id: 179, name: 'H19', isAvailable: true, valor: '30,00' },
    { id: 180, name: 'H20', isAvailable: true, valor: '30,00' },
    { id: 181, name: 'H21', isAvailable: true, valor: '30,00' },
    { id: 182, name: 'H22', isAvailable: true, valor: '30,00' },
    { id: 183, name: 'H23', isAvailable: true, valor: '30,00' },
    { id: 184, name: 'H24', isAvailable: true, valor: '30,00' },

    { id: 185, name: 'I1', isAvailable: true, valor: '30,00' },
    { id: 186, name: 'I2', isAvailable: true, valor: '30,00' },
    { id: 187, name: 'I3', isAvailable: true, valor: '30,00' },
    { id: 188, name: 'I4', isAvailable: true, valor: '30,00' },
    { id: 189, name: 'I5', isAvailable: true, valor: '30,00' },
    { id: 190, name: 'I6', isAvailable: true, valor: '30,00' },
    { id: 191, name: 'I7', isAvailable: true, valor: '30,00' },
    { id: 192, name: 'I8', isAvailable: true, valor: '30,00' },
    { id: 193, name: 'I9', isAvailable: true, valor: '30,00' },
    { id: 194, name: 'I10', isAvailable: true, valor: '30,00' },
    { id: 195, name: 'I11', isAvailable: true, valor: '30,00' },
    { id: 196, name: 'I12', isAvailable: true, valor: '30,00' },
    { id: 197, name: 'I13', isAvailable: true, valor: '30,00' },
    { id: 198, name: 'I14', isAvailable: true, valor: '30,00' },
    { id: 199, name: 'I15', isAvailable: true, valor: '30,00' },
    { id: 200, name: 'I16', isAvailable: true, valor: '30,00' },
    { id: 201, name: 'I17', isAvailable: true, valor: '30,00' },
    { id: 202, name: 'I18', isAvailable: true, valor: '30,00' },
    { id: 203, name: 'I19', isAvailable: true, valor: '30,00' },
    { id: 204, name: 'I20', isAvailable: true, valor: '30,00' },
    { id: 205, name: 'I21', isAvailable: true, valor: '30,00' },
    { id: 206, name: 'I22', isAvailable: true, valor: '30,00' },

    { id: 207, name: 'J1', isAvailable: true, valor: '30,00' },
    { id: 208, name: 'J2', isAvailable: true, valor: '30,00' },
    { id: 209, name: 'J3', isAvailable: true, valor: '30,00' },
    { id: 210, name: 'J4', isAvailable: true, valor: '30,00' },
    { id: 211, name: 'J5', isAvailable: true, valor: '30,00' },
    { id: 212, name: 'J6', isAvailable: true, valor: '30,00' },
    { id: 213, name: 'J7', isAvailable: true, valor: '30,00' },
    { id: 214, name: 'J8', isAvailable: true, valor: '30,00' },
    { id: 215, name: 'J9', isAvailable: true, valor: '30,00' },
    { id: 216, name: 'J10', isAvailable: true, valor: '30,00' },
    { id: 217, name: 'J11', isAvailable: true, valor: '30,00' },
    { id: 218, name: 'J12', isAvailable: true, valor: '30,00' },
    { id: 219, name: 'J13', isAvailable: true, valor: '30,00' },
    { id: 220, name: 'J14', isAvailable: true, valor: '30,00' },
    { id: 221, name: 'J15', isAvailable: true, valor: '30,00' },
    { id: 222, name: 'J16', isAvailable: true, valor: '30,00' },
    { id: 223, name: 'J17', isAvailable: true, valor: '30,00' },
    { id: 224, name: 'J18', isAvailable: true, valor: '30,00' },
    { id: 225, name: 'J19', isAvailable: true, valor: '30,00' },
    { id: 226, name: 'J20', isAvailable: true, valor: '30,00' },
    { id: 227, name: 'J21', isAvailable: true, valor: '30,00' },
    { id: 228, name: 'J22', isAvailable: true, valor: '30,00' },
    { id: 229, name: 'J23', isAvailable: true, valor: '30,00' },
    { id: 230, name: 'J24', isAvailable: true, valor: '30,00' },

    { id: 231, name: 'L1', isAvailable: true, valor: '30,00' },
    { id: 232, name: 'L2', isAvailable: true, valor: '30,00' },
    { id: 233, name: 'L3', isAvailable: true, valor: '30,00' },
    { id: 234, name: 'L4', isAvailable: true, valor: '30,00' },
    { id: 235, name: 'L5', isAvailable: true, valor: '30,00' },
    { id: 236, name: 'L6', isAvailable: true, valor: '30,00' },
    { id: 237, name: 'L7', isAvailable: true, valor: '30,00' },
    { id: 238, name: 'L8', isAvailable: true, valor: '30,00' },
    { id: 239, name: 'L9', isAvailable: true, valor: '30,00' },
    { id: 240, name: 'L10', isAvailable: true, valor: '30,00' },
    { id: 241, name: 'L11', isAvailable: true, valor: '30,00' },
    { id: 242, name: 'L12', isAvailable: true, valor: '30,00' },
    { id: 243, name: 'L13', isAvailable: true, valor: '30,00' },
    { id: 244, name: 'L14', isAvailable: true, valor: '30,00' },
    { id: 245, name: 'L15', isAvailable: true, valor: '30,00' },
    { id: 246, name: 'L16', isAvailable: true, valor: '30,00' },
    { id: 247, name: 'L17', isAvailable: true, valor: '30,00' },
    { id: 248, name: 'L18', isAvailable: true, valor: '30,00' },
    { id: 249, name: 'L19', isAvailable: true, valor: '30,00' },
    { id: 250, name: 'L20', isAvailable: true, valor: '30,00' },
    { id: 251, name: 'L21', isAvailable: true, valor: '30,00' },
    { id: 252, name: 'L22', isAvailable: true, valor: '30,00' },

    { id: 253, name: 'M1', isAvailable: true, valor: '30,00' },
    { id: 254, name: 'M2', isAvailable: true, valor: '30,00' },
    { id: 255, name: 'M3', isAvailable: true, valor: '30,00' },
    { id: 256, name: 'M4', isAvailable: true, valor: '30,00' },
    { id: 257, name: 'M5', isAvailable: true, valor: '30,00' },
    { id: 258, name: 'M6', isAvailable: true, valor: '30,00' },
    { id: 259, name: 'M7', isAvailable: true, valor: '30,00' },
    { id: 260, name: 'M8', isAvailable: true, valor: '30,00' },
    { id: 261, name: 'M9', isAvailable: true, valor: '30,00' },
    { id: 262, name: 'M10', isAvailable: true, valor: '30,00' },
    { id: 263, name: 'M11', isAvailable: true, valor: '30,00' },
    { id: 264, name: 'M12', isAvailable: true, valor: '30,00' },
    { id: 265, name: 'M13', isAvailable: true, valor: '30,00' },
    { id: 266, name: 'M14', isAvailable: true, valor: '30,00' },
    { id: 267, name: 'M15', isAvailable: true, valor: '30,00' },
    { id: 268, name: 'M16', isAvailable: true, valor: '30,00' },
    { id: 269, name: 'M17', isAvailable: true, valor: '30,00' },
    { id: 270, name: 'M18', isAvailable: true, valor: '30,00' },
    { id: 271, name: 'M19', isAvailable: true, valor: '30,00' },
    { id: 272, name: 'M20', isAvailable: true, valor: '30,00' },
    { id: 273, name: 'M21', isAvailable: true, valor: '30,00' },
    { id: 274, name: 'M22', isAvailable: true, valor: '30,00' },
    { id: 275, name: 'M23', isAvailable: true, valor: '30,00' },
    { id: 276, name: 'M24', isAvailable: true, valor: '30,00' },

    { id: 277, name: 'N1', isAvailable: true, valor: '30,00' },
    { id: 278, name: 'N2', isAvailable: true, valor: '30,00' },
    { id: 279, name: 'N3', isAvailable: true, valor: '30,00' },
    { id: 280, name: 'N4', isAvailable: true, valor: '30,00' },
    { id: 281, name: 'N5', isAvailable: true, valor: '30,00' },
    { id: 282, name: 'N6', isAvailable: true, valor: '30,00' },
    { id: 283, name: 'N7', isAvailable: true, valor: '30,00' },
    { id: 284, name: 'N8', isAvailable: true, valor: '30,00' },
    { id: 285, name: 'N9', isAvailable: true, valor: '30,00' },
    { id: 286, name: 'N10', isAvailable: true, valor: '30,00' },
    { id: 287, name: 'N11', isAvailable: true, valor: '30,00' },
    { id: 288, name: 'N12', isAvailable: true, valor: '30,00' },
    { id: 289, name: 'N13', isAvailable: true, valor: '30,00' },
    { id: 290, name: 'N14', isAvailable: true, valor: '30,00' },
    { id: 291, name: 'N15', isAvailable: true, valor: '30,00' },
    { id: 292, name: 'N16', isAvailable: true, valor: '30,00' },
    { id: 293, name: 'N17', isAvailable: true, valor: '30,00' },
    { id: 294, name: 'N18', isAvailable: true, valor: '30,00' },
    { id: 295, name: 'N19', isAvailable: true, valor: '30,00' },
    { id: 296, name: 'N20', isAvailable: true, valor: '30,00' },
    { id: 297, name: 'N21', isAvailable: true, valor: '30,00' },
    { id: 298, name: 'N22', isAvailable: true, valor: '30,00' },

    { id: 299, name: 'O1', isAvailable: true, valor: '30,00' },
    { id: 300, name: 'O2', isAvailable: true, valor: '30,00' },
    { id: 301, name: 'O3', isAvailable: true, valor: '30,00' },
    { id: 302, name: 'O4', isAvailable: true, valor: '30,00' },
    { id: 303, name: 'O5', isAvailable: true, valor: '30,00' },
    { id: 304, name: 'O6', isAvailable: true, valor: '30,00' },
    { id: 305, name: 'O7', isAvailable: true, valor: '30,00' },
    { id: 306, name: 'O8', isAvailable: true, valor: '30,00' },
    { id: 307, name: 'O9', isAvailable: true, valor: '30,00' },
    { id: 308, name: 'O10', isAvailable: true, valor: '30,00' },
    { id: 309, name: 'O11', isAvailable: true, valor: '30,00' },
    { id: 310, name: 'O12', isAvailable: true, valor: '30,00' },
    { id: 311, name: 'O13', isAvailable: true, valor: '30,00' },
    { id: 312, name: 'O14', isAvailable: true, valor: '30,00' },
    { id: 313, name: 'O15', isAvailable: true, valor: '30,00' },
    { id: 314, name: 'O16', isAvailable: true, valor: '30,00' },
    { id: 315, name: 'O17', isAvailable: true, valor: '30,00' },
    { id: 316, name: 'O18', isAvailable: true, valor: '30,00' },
    { id: 317, name: 'O19', isAvailable: true, valor: '30,00' },
    { id: 318, name: 'O20', isAvailable: true, valor: '30,00' },
    { id: 319, name: 'O21', isAvailable: true, valor: '30,00' },
    { id: 320, name: 'O22', isAvailable: true, valor: '30,00' },
    { id: 321, name: 'O23', isAvailable: true, valor: '30,00' },
    { id: 322, name: 'O24', isAvailable: true, valor: '30,00' },

    { id: 323, name: 'P1', isAvailable: true, valor: '30,00' },
    { id: 324, name: 'P2', isAvailable: true, valor: '30,00' },
    { id: 325, name: 'P3', isAvailable: true, valor: '30,00' },
    { id: 326, name: 'P4', isAvailable: true, valor: '30,00' },
    { id: 327, name: 'P5', isAvailable: true, valor: '30,00' },
    { id: 328, name: 'P6', isAvailable: true, valor: '30,00' },
    { id: 329, name: 'P7', isAvailable: true, valor: '30,00' },
    { id: 330, name: 'P8', isAvailable: true, valor: '30,00' },
    { id: 331, name: 'P9', isAvailable: true, valor: '30,00' },
    { id: 332, name: 'P10', isAvailable: true, valor: '30,00' },
    { id: 333, name: 'P11', isAvailable: true, valor: '30,00' },
    { id: 334, name: 'P12', isAvailable: true, valor: '30,00' },
    { id: 335, name: 'P13', isAvailable: true, valor: '30,00' },
    { id: 336, name: 'P14', isAvailable: true, valor: '30,00' },
    { id: 337, name: 'P15', isAvailable: true, valor: '30,00' },
    { id: 338, name: 'P16', isAvailable: true, valor: '30,00' },
    { id: 339, name: 'P17', isAvailable: true, valor: '30,00' },
    { id: 340, name: 'P18', isAvailable: true, valor: '30,00' },
    { id: 341, name: 'P19', isAvailable: true, valor: '30,00' },
    { id: 342, name: 'P20', isAvailable: true, valor: '30,00' },
    { id: 343, name: 'P21', isAvailable: true, valor: '30,00' },
    { id: 344, name: 'P22', isAvailable: true, valor: '30,00' },

    { id: 345, name: 'Q1', isAvailable: true, valor: '30,00' },
    { id: 346, name: 'Q2', isAvailable: true, valor: '30,00' },
    { id: 347, name: 'Q3', isAvailable: true, valor: '30,00' },
    { id: 348, name: 'Q4', isAvailable: true, valor: '30,00' },
    { id: 349, name: 'Q5', isAvailable: true, valor: '30,00' },
    { id: 350, name: 'Q6', isAvailable: true, valor: '30,00' },
    { id: 351, name: 'Q7', isAvailable: true, valor: '30,00' },
    { id: 352, name: 'Q8', isAvailable: true, valor: '30,00' },
    { id: 353, name: 'Q9', isAvailable: true, valor: '30,00' },
    { id: 354, name: 'Q10', isAvailable: true, valor: '30,00' },
    { id: 355, name: 'Q11', isAvailable: true, valor: '30,00' },
    { id: 356, name: 'Q12', isAvailable: true, valor: '30,00' },
    { id: 357, name: 'Q13', isAvailable: true, valor: '30,00' },
    { id: 358, name: 'Q14', isAvailable: true, valor: '30,00' },
    { id: 359, name: 'Q15', isAvailable: true, valor: '30,00' },
    { id: 360, name: 'Q16', isAvailable: true, valor: '30,00' },
    { id: 361, name: 'Q17', isAvailable: true, valor: '30,00' },
    { id: 362, name: 'Q18', isAvailable: true, valor: '30,00' },
    { id: 363, name: 'Q19', isAvailable: true, valor: '30,00' },
    { id: 364, name: 'Q20', isAvailable: true, valor: '30,00' },
    { id: 365, name: 'Q21', isAvailable: true, valor: '30,00' },
    { id: 366, name: 'Q22', isAvailable: true, valor: '30,00' },
    { id: 367, name: 'Q23', isAvailable: true, valor: '30,00' },
    { id: 368, name: 'Q24', isAvailable: true, valor: '30,00' },

    { id: 369, name: 'R1', isAvailable: true, valor: '30,00' },
    { id: 370, name: 'R2', isAvailable: true, valor: '30,00' },
    { id: 371, name: 'R3', isAvailable: true, valor: '30,00' },
    { id: 372, name: 'R4', isAvailable: true, valor: '30,00' },
    { id: 373, name: 'R5', isAvailable: true, valor: '30,00' },
    { id: 374, name: 'R6', isAvailable: true, valor: '30,00' },
    { id: 375, name: 'R7', isAvailable: true, valor: '30,00' },
    { id: 376, name: 'R8', isAvailable: true, valor: '30,00' },
    { id: 377, name: 'R9', isAvailable: true, valor: '30,00' },
    { id: 378, name: 'R10', isAvailable: true, valor: '30,00' },
    { id: 379, name: 'R11', isAvailable: true, valor: '30,00' },
    { id: 380, name: 'R12', isAvailable: true, valor: '30,00' },
    { id: 381, name: 'R13', isAvailable: true, valor: '30,00' },
    { id: 382, name: 'R14', isAvailable: true, valor: '30,00' },
    { id: 383, name: 'R15', isAvailable: true, valor: '30,00' },
    { id: 384, name: 'R16', isAvailable: true, valor: '30,00' },
    { id: 385, name: 'R17', isAvailable: true, valor: '30,00' },
    { id: 386, name: 'R18', isAvailable: true, valor: '30,00' },
    { id: 387, name: 'R19', isAvailable: true, valor: '30,00' },
    { id: 388, name: 'R20', isAvailable: true, valor: '30,00' },
    { id: 389, name: 'R21', isAvailable: true, valor: '30,00' },
    { id: 390, name: 'R22', isAvailable: true, valor: '30,00' },

    { id: 391, name: 'S1', isAvailable: true, valor: '30,00' },
    { id: 392, name: 'S2', isAvailable: true, valor: '30,00' },
    { id: 393, name: 'S3', isAvailable: true, valor: '30,00' },
    { id: 394, name: 'S4', isAvailable: true, valor: '30,00' },
    { id: 395, name: 'S5', isAvailable: true, valor: '30,00' },
    { id: 396, name: 'S6', isAvailable: true, valor: '30,00' },
    { id: 397, name: 'S7', isAvailable: true, valor: '30,00' },
    { id: 398, name: 'S8', isAvailable: true, valor: '30,00' },
    { id: 399, name: 'S9', isAvailable: true, valor: '30,00' },
    { id: 400, name: 'S10', isAvailable: true, valor: '30,00' },
    { id: 401, name: 'S11', isAvailable: true, valor: '30,00' },
    { id: 402, name: 'S12', isAvailable: true, valor: '30,00' },
    { id: 403, name: 'S13', isAvailable: true, valor: '30,00' },
    { id: 404, name: 'S14', isAvailable: true, valor: '30,00' },
    { id: 405, name: 'S15', isAvailable: true, valor: '30,00' },
    { id: 406, name: 'S16', isAvailable: true, valor: '30,00' },
    { id: 407, name: 'S17', isAvailable: true, valor: '30,00' },
    { id: 408, name: 'S18', isAvailable: true, valor: '30,00' },
    { id: 409, name: 'S19', isAvailable: true, valor: '30,00' },
    { id: 410, name: 'S20', isAvailable: true, valor: '30,00' },
    { id: 411, name: 'S21', isAvailable: true, valor: '30,00' },
    { id: 412, name: 'S22', isAvailable: true, valor: '30,00' },
    { id: 413, name: 'S23', isAvailable: true, valor: '30,00' },
    { id: 414, name: 'S24', isAvailable: true, valor: '30,00' },
    { id: 415, name: 'T1', isAvailable: true, valor: '30,00' },
    { id: 416, name: 'T2', isAvailable: true, valor: '30,00' },
    { id: 417, name: 'T3', isAvailable: true, valor: '30,00' },
    { id: 418, name: 'T4', isAvailable: true, valor: '30,00' },
    { id: 419, name: 'T5', isAvailable: true, valor: '30,00' },
    { id: 420, name: 'T6', isAvailable: true, valor: '30,00' },
    { id: 421, name: 'T7', isAvailable: true, valor: '30,00' },
    { id: 422, name: 'T8', isAvailable: true, valor: '30,00' },
    { id: 423, name: 'T9', isAvailable: true, valor: '30,00' },
    { id: 424, name: 'T10', isAvailable: true, valor: '30,00' },
    { id: 425, name: 'T11', isAvailable: true, valor: '30,00' },
    { id: 426, name: 'T12', isAvailable: true, valor: '30,00' },
    { id: 427, name: 'T13', isAvailable: true, valor: '30,00' },
    { id: 428, name: 'T14', isAvailable: true, valor: '30,00' },
    { id: 429, name: 'T15', isAvailable: true, valor: '30,00' },
    { id: 430, name: 'T16', isAvailable: true, valor: '30,00' },
    { id: 431, name: 'T17', isAvailable: true, valor: '30,00' },
    { id: 432, name: 'T18', isAvailable: true, valor: '30,00' },
    { id: 433, name: 'T19', isAvailable: true, valor: '30,00' },
    { id: 434, name: 'T20', isAvailable: true, valor: '30,00' },
    { id: 435, name: 'T21', isAvailable: true, valor: '30,00' },
    { id: 436, name: 'T22', isAvailable: true, valor: '30,00' },

    { id: 437, name: 'U1', isAvailable: true, valor: '30,00' },
    { id: 438, name: 'U2', isAvailable: true, valor: '30,00' },
    { id: 439, name: 'U3', isAvailable: true, valor: '30,00' },
    { id: 440, name: 'U4', isAvailable: true, valor: '30,00' },
    { id: 441, name: 'U5', isAvailable: true, valor: '30,00' },
    { id: 442, name: 'U6', isAvailable: true, valor: '30,00' },
    { id: 443, name: 'U7', isAvailable: true, valor: '30,00' },
    { id: 444, name: 'U8', isAvailable: true, valor: '30,00' },
    { id: 445, name: 'U9', isAvailable: true, valor: '30,00' },
    { id: 446, name: 'U10', isAvailable: true, valor: '30,00' },
    { id: 447, name: 'U11', isAvailable: true, valor: '30,00' },
    { id: 448, name: 'U12', isAvailable: true, valor: '30,00' },
    { id: 449, name: 'U13', isAvailable: true, valor: '30,00' },
    { id: 450, name: 'U14', isAvailable: true, valor: '30,00' },
    { id: 451, name: 'U15', isAvailable: true, valor: '30,00' },
    { id: 452, name: 'U16', isAvailable: true, valor: '30,00' },
    { id: 453, name: 'U17', isAvailable: true, valor: '30,00' },
    { id: 454, name: 'U18', isAvailable: true, valor: '30,00' },
    { id: 455, name: 'U19', isAvailable: true, valor: '30,00' },
    { id: 456, name: 'U20', isAvailable: true, valor: '30,00' },
    { id: 457, name: 'U21', isAvailable: true, valor: '30,00' },
    { id: 458, name: 'U22', isAvailable: true, valor: '30,00' },
    { id: 459, name: 'U23', isAvailable: true, valor: '30,00' },
    { id: 460, name: 'U24', isAvailable: true, valor: '30,00' },
    { id: 461, name: 'V1', isAvailable: true, valor: '30,00' },
    { id: 462, name: 'V2', isAvailable: true, valor: '30,00' },
    { id: 463, name: 'V3', isAvailable: true, valor: '30,00' },
    { id: 464, name: 'V4', isAvailable: true, valor: '30,00' },
    { id: 465, name: 'V5', isAvailable: true, valor: '30,00' },
    { id: 466, name: 'V6', isAvailable: true, valor: '30,00' },
    { id: 467, name: 'V7', isAvailable: true, valor: '30,00' },
    { id: 468, name: 'V8', isAvailable: true, valor: '30,00' },
    { id: 469, name: 'V9', isAvailable: true, valor: '30,00' },
    { id: 470, name: 'V10', isAvailable: true, valor: '30,00' },
    { id: 471, name: 'V11', isAvailable: true, valor: '30,00' },
    { id: 472, name: 'V12', isAvailable: true, valor: '30,00' },
    { id: 473, name: 'V13', isAvailable: true, valor: '30,00' },
    { id: 474, name: 'V14', isAvailable: true, valor: '30,00' },
    { id: 475, name: 'V15', isAvailable: true, valor: '30,00' },
    { id: 476, name: 'V16', isAvailable: true, valor: '30,00' },
    { id: 477, name: 'V17', isAvailable: true, valor: '30,00' },
    { id: 478, name: 'V18', isAvailable: true, valor: '30,00' },
    { id: 479, name: 'V19', isAvailable: true, valor: '30,00' },
    { id: 480, name: 'V20', isAvailable: true, valor: '30,00' },
    { id: 481, name: 'V21', isAvailable: true, valor: '30,00' },
    { id: 482, name: 'V22', isAvailable: true, valor: '30,00' },
  ]

  // Insere todos os registros de assentos em massa
  await prisma.assentos.createMany({
    data: assentosData,
    skipDuplicates: true, // Isso evitará a inserção de registros duplicados com base na chave primária
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
