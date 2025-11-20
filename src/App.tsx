import { FolderIcon } from '@heroicons/react/24/solid'

type Folder = {
    name:string,
    folders?:Folder[]
}
function App() {
    const folders:Folder[] = [
        {
            name: "Movie", folders: [
                {
                    name: "action", folders: [
                        { name: "2000", folders:[
                            {name: "2000/1"},
                            {name: "2000/2" , folders:[
                                {name: "2000/2/1"},{name: "2000/2/2"}
                            ]}
                        ]},
                        { name: "2025" }
                    ]
                },
                { name: "comedy" }
            ]
        },
        { name: "Music", folders: [{ name: "rock" }, { name: "Classical" }] },
        { name: "Picture" },
        { name: "Documents" }
    ];

    return (
        <div className='p-8 max-w-sm mx-auto'>
            <ul>
                <li className='my-1.5'>
                    <span className='flex items-center gap-1.5'>
                        <FolderIcon className='size-6 text-sky-500' />
                        Home
                    </span>
                </li>
                <Folder folders={folders} />
            </ul>
        </div>
    )
}

function Folder({folders}:Folder) {
    return (
        <ul className='pl-6'>
            {
                folders.map((folder, index) => (
                    <li className='my-1.5' key={index}>
                        <span className='flex items-center gap-1.5'>
                            <FolderIcon className='size-6 text-sky-500' />
                            {folder.name}
                        </span>
                        { folder.folders &&
                            <Folder folders={folder.folders} key={folder.name} />
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default App;

