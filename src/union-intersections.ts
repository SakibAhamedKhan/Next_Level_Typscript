type NoobDeveloper = {
    name: string,

}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number,
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: "junior" | "mid" | "senior"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Monzu Mia",
    expertise: "Express",
}

const newDeveloper2: NextLevelDeveloper = {
    leadershipExperience: 2, 
    experience: 2,
    expertise: 'React' ,
    level: 'junior'
 }
