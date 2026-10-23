import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>; 
}) {
  const { query: searchQuery } = await searchParams ?? {};
  const query = searchQuery || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <main className="w-full">
      <CustomersTable customers={customers} />
    </main>
  );
}