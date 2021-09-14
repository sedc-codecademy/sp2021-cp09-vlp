import Head from "next/head";
import Link from "next/link";

import axios from "axios";

export default function HomePage(props) {
  const { academies } = props.data;

  return (
    <div>
      <Head>
        <title>SEDC - Academies</title>
      </Head>
      <h1>Homepage</h1>
      {academies.map(academy => (
        <Link
          href={`/${academy.id}/${academy.study_programs[0].id}`}
          key={academy.id}
        >
          <button>
            <a>{academy.title}</a>
          </button>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://vlp-data.herokuapp.com/academies");

  return {
    props: {
      data: response.data,
    },
  };
}
