import Image from "next/image";
import { Clock, QrCode, ScanLine, User } from "lucide-react";

export default function PhoneMockup({
  className = "",
  imageSrc,
}: {
  className?: string;
  imageSrc?: string;
}) {
  return (
    <div className={`relative mx-auto w-[280px] sm:w-[320px] ${className}`}>
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl">
        <div className="absolute left-1/2 top-0 z-20 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

        <div className="flex h-12 w-full items-center justify-between px-6 pt-2">
          <span className="text-[10px] font-medium text-slate-900">9:41</span>
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-900/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-900/20" />
            <div className="h-2.5 w-4 rounded-full bg-slate-900/20" />
          </div>
        </div>

        {imageSrc ? (
          <div className="relative h-full w-full bg-slate-50">
            <Image
              src={imageSrc}
              alt="App Screenshot"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 280px, 320px"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex h-full flex-col bg-slate-50">
            <div className="flex items-center justify-between px-6 pb-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-brand)] font-bold text-white">
                  a
                </div>
                <span className="text-lg font-bold text-slate-800">Ato</span>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full border border-slate-100 bg-white shadow-sm">
                <User className="h-4 w-4 text-slate-400" />
              </div>
            </div>

            <div className="px-4">
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-semibold">待ち組数</span>
                  </div>
                  <span className="text-sm font-bold text-slate-800">あと5組</span>
                </div>

                <div className="text-center">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Number
                  </span>
                  <span className="block text-5xl font-black tracking-tight text-[var(--color-brand)]">12</span>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="relative grid place-items-center rounded-xl bg-slate-900 p-3 text-white">
                    <QrCode className="h-24 w-24 stroke-[1.5]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-20 w-20 rounded-lg border-2 border-[var(--color-brand)] animate-pulse" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-[10px] font-medium text-slate-400">
                  呼び出し時にこの画面を見せるだけ
                </p>
              </div>
            </div>

            <div className="mt-auto p-4 pb-8">
              <div className="flex gap-3">
                <div className="flex-1 rounded-2xl bg-[var(--color-brand)] p-4 text-white shadow-[0_14px_26px_-14px_rgba(74,92,122,0.55)]">
                  <div className="mb-1 grid h-8 w-8 place-items-center rounded-full bg-white/20">
                    <ScanLine className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium opacity-80">Check In</p>
                  <p className="font-bold">呼び出す</p>
                </div>
                <div className="flex-1 rounded-2xl bg-white p-4 text-slate-600 shadow-sm ring-1 ring-slate-100">
                  <div className="mb-1 grid h-8 w-8 place-items-center rounded-full bg-slate-100">
                    <Clock className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium opacity-60">History</p>
                  <p className="font-bold text-slate-800">履歴</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.5rem] bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
    </div>
  );
}