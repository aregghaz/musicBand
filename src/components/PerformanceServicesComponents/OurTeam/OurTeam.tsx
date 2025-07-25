'use client';

import { useDispatch, useSelector } from 'react-redux';
import './ourTeam.scss';
import {
  setSelectedTeam,
  TeamMenuItem,
} from '../../../store/slices/teamMenuSlice';
import { AppDispatch, RootState } from '../../../store/store';
import TeamItems from '@components/PerformanceServicesComponents/TeamItems/TeamItems';

export default function OurTeam() {
  const dispatch = useDispatch<AppDispatch>();
  const teamMenuItems = useSelector(
    (state: RootState) => state.teamMenu.teamMenuItems
  );
  const selectedTeamId = useSelector(
    (state: RootState) => state.teamMenu.selectedTeamId
  );
  const teamItems = useSelector(
    (state: RootState) => state.teamItems.teamItems
  );

  const filteredItems =
    selectedTeamId === '1'
      ? teamItems
      : teamItems.filter((item) => item.teamId === selectedTeamId);

  return (
    <section className="ourTeam" id="Ensembles">
      <div className="teamHeader">
        <h2>Ensembles and Lineups</h2>
        <div className="catalogMenu">
          <ul>
            {teamMenuItems.map((item: TeamMenuItem) => (
              <li
                key={item.id}
                onClick={() => dispatch(setSelectedTeam(item.id))}
                className={selectedTeamId === item.id ? 'active' : ''}
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="teamBody">
        <div className="teamItems">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <TeamItems key={item.id} item={item} />)
          ) : (
            <p>No team members to display</p>
          )}
        </div>
      </div>
    </section>
  );
}
