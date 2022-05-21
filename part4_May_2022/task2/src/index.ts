let elements: string[] = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Ar", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Ni", "Co", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "I", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Pa", "Th", "Np", "U", "Pu", "Am", "Bk", "Cm", "No", "Cf", "Es", "Hs", "Mt", "Fm", "Md", "Lr", "Rf", "Bh", "Db", "Sg", "Uun", "Uuu", "Uub"];

let molecularMasses: number[] = [1.00797, 4.0026, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179, 22.98977, 24.305, 26.98154, 28.0855, 30.97376, 32.06, 35.453, 39.0983, 39.948, 40.08, 44.9559, 47.9, 50.9415, 51.996, 54.938, 55.847, 58.7, 58.9332, 63.546, 65.38, 69.72, 72.59, 74.9216, 78.96, 79.904, 83.8, 85.4678, 87.62, 88.9059, 91.22, 92.9064, 95.94, 98, 101.07, 102.9055, 106.4, 107.868, 112.41, 114.82, 118.69, 121.75, 126.9045, 127.6, 131.3, 132.9054, 137.33, 138.9055, 140.12, 140.9077, 144.24, 145, 150.4, 151.96, 157.25, 158.9254, 162.5, 164.9304, 167.26, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.85, 186.207, 190.2, 192.22, 195.09, 196.9665, 200.59, 204.37, 207.2, 208.9804, 209, 210, 222, 223, 226.0254, 227.0278, 231.0359, 232.0381, 237.0482, 238.029, 242, 243, 247, 247, 250, 251, 252, 255, 256, 257, 258, 260, 261, 262, 262, 263, 269, 272, 277];

let elementMass: Map<string, number> = new Map();

for (let i = 0; i < elements.length; i++) {
    elementMass.set(elements[i], molecularMasses[i]);
}

function splitSimplMolecToAtomsNums(molecule: string): RegExpMatchArray | null {
    let pattern: RegExp = /([A-Z][a-z]*)([0-9]*)/g;
    return molecule.match(pattern);
}

let molecule1: string = "C6H12O6"
let molecule2: string = "H3PO4"
let molecule3: string = "C9H11NO3"
let molecule4: string = "CaCl2"

console.log(splitSimplMolecToAtomsNums(molecule1))
console.log(splitSimplMolecToAtomsNums(molecule2))
console.log(splitSimplMolecToAtomsNums(molecule3))
console.log(splitSimplMolecToAtomsNums(molecule4))
