import React from 'react';
import Timeline from '../components/course/Timeline';
import Professors from '../components/course/Professors';
import TimelineProvider from '../components/course/TimelineProvider';
import ProfessorsProvider from '../components/course/ProfessorsProvider';

export default function Course() {
  return (
    <TimelineProvider>
      <ProfessorsProvider>
        <main className="flex flex-wrap-reverse">
          <div className="w-100 w-50-l ph2">
            <Timeline />
          </div>
          <div className="w-100 w-50-l ph2">
            <Professors />
          </div>
        </main>
      </ProfessorsProvider>
    </TimelineProvider>
  );
}
