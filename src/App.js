import React from "react";
import "./App.css";
import example from "./example2.json";
import example1 from "./examples/example1.json";
import wreath_L from "./img/wreath_L.svg";
import wreath_R from "./img/wreath_R.svg";
import wreath from "./img/wreath.svg";
import partners1 from "./examples/partners1.json";
import ExampleComponent from "./ExampleComponent";
import partnersResources from "./examples/partnersResources.json";
import TableComponent from "./TableComponent";
import GetComponent from "./GetComponent";

function App() {
  return (
    <div className="flex justify-center bg-background">
      <main className="bg-white max-h-full max-w-5xl flex flex-col items-center">
        <div className="flex flex-row justify-center items-center mt-20">
          <img
            src={wreath_L}
            alt="green wreath"
            width="50"
            className="mr-2 select-none"
          />
          <h1 className="text-6xl uppercase tracking-tight font-cocogoose [word-spacing:-20px] text-title">
            Theogony <span className="text-5xl">API</span>
          </h1>
          <img
            src={wreath_R}
            alt="green wreath"
            width="50"
            className="ml-3 select-none"
          />
        </div>

        <section className="w-8/12 mt-24">
          <h2 className="text-2xl uppercase tracking-tight font-cocogoose [word-spacing:-20px] text-title">
            Information
          </h2>
          <p className="mt-4">
            <i>Theogony API</i> is a REST API that gives you the possibility to
            retrieve information about Greek Mythology Gods, Titans, Spirits,
            Nymphs, Beasts and the relationships and partnerships they had. This
            way, you are able to trace the entire Greek Mythology Family Tree
            from a child to its great, great, great... grandfather.
          </p>
          <p className="mt-4">
            Note that the information about all the deities and beasts, as well
            as relationships and parentship, is based on Hesiod's Theogony.
            Therefore, bare in mind that this API does not take into account
            other Greek mythology sources, such as Homer or Aeschylus.
          </p>
          <p className="mt-8">
            This API is designed for consumption only, supporting only the HTTP
            GET method for accessing the resources. No authentication is needed
            to use this API; all resources are openly accessible.
          </p>
        </section>
        <section className="w-8/12 mt-10">
          <h2 className="text-2xl uppercase tracking-tight font-cocogoose text-title">
            Resource List
          </h2>
          <article className="mt-4">
            {" "}
            <p>This project is divided in two main resources:</p>
            <ul class=" space-y-1 list-inside pl-4 grid grid-cols-[auto_18rem_auto_1fr] gap-x-5 gap-y-2 mt-4 items-center">
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Myths
                </mark>{" "}
              </li>
              <p>all of the mythological creatures.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/myths</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Relationships
                </mark>{" "}
              </li>
              <p>relationships between the creatures.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/relationships</code>
            </ul>
            <p className="mt-8">
              However if you want a more specific type of mythological creature
              there are specific endpoints to get them:
            </p>
            <ul class=" space-y-1 list-inside pl-8 grid grid-cols-[auto_18rem_auto_1fr] gap-x-5 gap-y-2 mt-4 items-center">
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Primordials
                </mark>{" "}
              </li>
              <p>first-born immortal Gods.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/primordials</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Gods
                </mark>{" "}
              </li>
              <p>non-specific Gods such as Olympians.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/gods</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Titans
                </mark>{" "}
              </li>
              <p>Titan-Gods deities.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/titans</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Daemons
                </mark>{" "}
              </li>

              <p>personified spirits deities.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/daemons</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Nymphs
                </mark>{" "}
              </li>
              <p>minor goddesses.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/nymphs</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Beasts
                </mark>{" "}
              </li>
              <p>monsters, giants, dragons, etc.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/beasts</code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-[#38B263] rounded select-none font-medium">
                  Mortals
                </mark>{" "}
              </li>
              <p>non-immortal creatures.</p>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-blue-500 rounded select-none font-medium">
                  GET
                </mark>{" "}
              </li>
              <code className="tracking-tighter ml-2">/mortals</code>
            </ul>
            <p className="mt-8">
              This project comes with pagination aswell. There's a limit which
              is the number of items to get in a petition and an offset which is
              the number of the start item. These are the default values:
            </p>
            <ul class=" space-y-1 list-inside pl-16 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 mt-4 items-center">
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-slate-500 rounded select-none font-medium">
                  limit
                </mark>{" "}
              </li>
              <code className="tracking-tighter" style={{ marginTop: 0 }}>
                20
              </code>
              <li class="justify-self-end">
                <mark className="px-2 text-white bg-slate-500 rounded select-none font-medium">
                  offset
                </mark>{" "}
              </li>
              <code className="tracking-tighter" style={{ marginTop: 0 }}>
                20
              </code>
            </ul>
          </article>
          <h3 className="text-xl uppercase tracking-tight font-cocogoose text-title mt-10">
            Examples
          </h3>
          <ExampleComponent
            req="GET"
            url={["https://api.theogonia.net/myths"]}
            jsonFiles={[example]}
            marginTop={"2rem"}
          />
          <ExampleComponent
            req="GET"
            url={["https://api.theogonia.net/relationships"]}
            jsonFiles={[partnersResources]}
            marginTop={"3rem"}
          />
        </section>
        <TableComponent
          marginTop={"2rem"}
          list={[
            {
              name: "count",
              description: "Number of resources returned from API call.",
              type: "integer",
            },
            {
              name: "next",
              description: "URL for the next page.",
              type: "string",
            },
            {
              name: "previous",
              description: "URL for the previous page.",
              type: "string",
            },
            {
              name: "results",
              description: "Results with the list of resources demanded.",
              type: "object[]",
            },
          ]}
        />
        <section className="w-8/12 mt-10">
          <h2 className="text-2xl uppercase tracking-tight font-cocogoose text-title">
            Myths
          </h2>
          <p className="mt-4">
            With this endpoint you can fetch more information about all the
            Mythological Creatures, <i>Primordials</i>, <i>Gods</i>,{" "}
            <i>Titans</i>, <i>Daemons</i>, <i>Nymphs</i>, <i>Beasts</i> and{" "}
            <i>Mortals</i>. It'll give you information such as gender, type, its
            parents, its partners and other information depending on the
            mythological creature.
          </p>
          <p className="mt-2">
            You can either search its name or write <i>rand</i> and get a random
            creature. This <i>rand</i> can be applied to the whole pool on
            /myths or be used on the single types endpoints if for instance you
            only want a random Titan.
          </p>
          <ExampleComponent
            req="GET"
            url={[
              "https://api.theogonia.net/myths/{name}",
              "https://api.theogonia.net/myths/rand",
            ]}
            jsonFiles={[example1]}
            marginTop={"2rem"}
          />
        </section>
        <TableComponent
          marginTop={"2rem"}
          list={[
            {
              name: "name",
              description: "Name of the god transliterated.",
              type: "string",
            },
            {
              name: "gender",
              description: "Gender of the god.",
              type: "male | female",
            },
            {
              name: "type",
              description: "Type of Mythological creature.",
              type: "string",
            },
            {
              name: "parentsId",
              description: "Id of the God's parents.",
              type: "integer | null",
            },
            // {
            //   name: "description",
            //   description: "Description of the god.",
            //   type: "string",
            // },
            // {
            //   name: "greekName",
            //   description: "God's name in original greek.",
            //   type: "string",
            // },
            // {
            //   name: "romanName",
            //   description: "God's name in Roman version.",
            //   type: "string",
            // },
            {
              name: "element?",
              description: "Attribute of Primordials.",
              type: "string",
            },
            {
              name: "personification?",
              description: "Attribute of Daemons.",
              type: "string[]",
            },
            {
              name: "kind?",
              description: "Attribute of Beasts.",
              type: "string",
            },
            {
              name: "domains?",
              description: "Attribute of Gods and Titans.",
              type: "string[]",
            },
            {
              name: "symbols?",
              description: "Attribute of Gods and Titans.",
              type: "string[]",
            },
            {
              name: "relationshipsIds",
              description:
                "Partners (wives or husbands) that the God had relationships with.",
              type: "integer[]",
            },
          ]}
        />
        <section className="w-8/12 mt-10">
          <h2 className="text-2xl uppercase tracking-tight font-cocogoose text-title">
            Relationships
          </h2>
          <ExampleComponent
            description="Here you can find every relationship any God or mythological creature had and how many kids and their names."
            req="GET"
            url={[
              "https://api.theogonia.net/partners/{id}",
              "https://api.theogonia.net/partners?p1={partner1Name}&p2partner2Name}",
            ]}
            jsonFiles={[partners1]}
          />
        </section>

        <TableComponent
          marginTop={"2rem"}
          list={[
            {
              name: "id",
              description: "ID of the relationship.",
              type: "integer",
            },
            {
              name: "partner_1",
              description: "First partner",
              type: "string",
            },
            {
              name: "partner_2",
              description: "Second partner.",
              type: "string",
            },
            {
              name: "children",
              description: "Children that both gods had together.",
              type: "string[]",
            },
          ]}
        />
        <footer className="h-50 bg-background w-full flex flex-row py-12 px-6 mt-10 items-end">
          <div className="flex flex-col flex-1 gap-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nbguardiola/"
              className="underline text-title"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/Blondie-TheManWithNoName"
              className="underline text-title inline-block"
            >
              Github
            </a>
            <p className=" text-slate-500">
              This website and API were created by{" "}
              <a
                href="https://noahguardiola.me/"
                className="underline"
                target="_blank"
              >
                Noah Guardiola
              </a>
            </p>
          </div>
          <div className="row-span-3 flex flex-col items-center mt-4">
            <p className="font-medium text-title">THEOGONY</p>
            <img
              src={wreath}
              alt="green wreath"
              width="50"
              className="mt-3 select-none"
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <a
              target="_blank"
              href="https://github.com/Blondie-TheManWithNoName/greek-tree-2.0"
              className="underline text-title mt-2 text-right	"
            >
              Repository
            </a>
            <p className="text-slate-500 text-right	">
              This project is under the GNU General Public License
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
