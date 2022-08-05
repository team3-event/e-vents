const people = [
    { name: 'Caelin Hargrave', role: 'Software Developer', imageUrl: 'https://avatars.githubusercontent.com/u/106052558?v=4', githubUrl: '#', linkedinUrl: 'https://www.linkedin.com/in/caelin-hargrave/', }, 
    { name: 'Austin Limnanek', role: 'Software Developer', imageUrl: 'https://avatars.githubusercontent.com/u/106109461?v=4', githubUrl: '#', linkedinUrl: 'https://www.linkedin.com/in/austinlimanek/', },
    { name: 'Trevor Stephens', role: 'Software Developer', imageUrl: 'https://avatars.githubusercontent.com/u/104862689?v=4', githubUrl: '#', linkedinUrl: 'https://www.linkedin.com/in/trevorlstephens/', },
    { name: 'Rexie Esmeralda', role: 'Software Developer', imageUrl: 'https://avatars.githubusercontent.com/u/101059597?v=4', githubUrl: '#', linkedinUrl: 'https://www.linkedin.com/in/rexieesmeralda/', },
    { name: 'TJ Parker', role: 'Software Developer', imageUrl: 'https://avatars.githubusercontent.com/u/106053581?v=4', githubUrl: '#', linkedinUrl: 'https://www.linkedin.com/in/tj-parker/', }
    ]
    export default function Example() {
      return (
        <footer className="bg-blue-800">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold text-stone-50 tracking-tight sm:text-4xl">Meet our Team!</h2>
                <p className="text-xl text-stone-50">

                </p>
              </div>
              <div className="lg:col-span-2">
                <ul  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="flex text-stone-50 items-center space-x-4 lg:space-x-6">
                        <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-stone-50">{person.role}</p>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )
    }