import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { initialJobs, emptyPayroll, type Job, type PayrollRow } from "./data";

type HRState = {
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
  payroll: PayrollRow[];
  setPayroll: Dispatch<SetStateAction<PayrollRow[]>>;
  savedPayroll: PayrollRow[] | null;
  setSavedPayroll: Dispatch<SetStateAction<PayrollRow[] | null>>;
};
const HRContext = createContext<HRState | null>(null);
export function HRProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [payroll, setPayroll] = useState(emptyPayroll);
  const [savedPayroll, setSavedPayroll] = useState<PayrollRow[] | null>(null);
  return (
    <HRContext.Provider
      value={{ jobs, setJobs, payroll, setPayroll, savedPayroll, setSavedPayroll }}
    >
      {children}
    </HRContext.Provider>
  );
}
export function useHR() {
  const state = useContext(HRContext);
  if (!state) throw new Error("HR pages require HRProvider");
  return state;
}
