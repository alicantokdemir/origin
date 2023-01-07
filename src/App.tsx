import { Navbar } from './components/shared/Navbar';
import { PlanSavingGoal } from './components/PlanSavingGoal/PlanSavingGoal';

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <PlanSavingGoal />
    </>
  );
}
