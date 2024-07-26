export default function StatusDisplay({ status }: { status: string }) {
  function getColor(status: string) {
    let color = "bg-slate-700";
    switch (status) {
      case "done":
        return (color = "bg-green-200");
      case "started":
        return (color = "bg-yellow-200");
      case "not started":
        return (color = "bg-red-200");
    }
  }
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}
