import { DatePickerForm } from "@/components/pages/home/date-picker";

export default function Home({ params }: any) {
  const { locale } = params;
  return (
    <main className="max-w-full flex flex-col gap-10 mt-20 items-center justify-center ">
      <a
        href={`/${locale}/properties`}
        className="bg-blue-500 text-white p-4 rounded"
      >
        properties page
      </a>

      <DatePickerForm />
    </main>
  );
}
