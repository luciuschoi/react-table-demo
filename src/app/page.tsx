import Image from "next/image";
import { DataTable } from "./data-table";
import { getAllUsers } from './actions';
import { columns } from './columns';

export default async function Home() {
  const data = await getAllUsers();
  console.log(data);


  return (
    <section>
      <h1 className={'text-3xl my-3'}>React Table Demo</h1>
      <p className={'my-3'}>
        This is a simple demo of the React Table library. It shows a table of
        data with sorting, filtering, and pagination.
      </p>

      <DataTable columns={columns} data={data} />
    </section>
  );
}
