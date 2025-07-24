import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonaCardType } from '../../types/personaCardType';

interface PersonaState {
  cards: PersonaCardType[];
}

const initialState: PersonaState = {
  cards: [
    // 🧑‍🎤 Bruno Mars (ID: 1)
    {
      id: '1',
      personaId: '1',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 38</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Profession:</strong> Singer, Songwriter</p>
        <p><strong>Location:</strong> Los Angeles</p>
        <p><strong>Relationship:</strong> In a relationship</p>
      `,
    },
    {
      id: '2',
      personaId: '1',
      title: 'Personality',
      content: `
        <p><strong>Charisma</strong></p><div class="bar bar-100"></div>
        <p><strong>Energy</strong></p><div class="bar bar-90"></div>
        <p><strong>Humor</strong></p><div class="bar bar-95"></div>
      `,
    },
    {
      id: '3',
      personaId: '1',
      title: 'Interests',
      content: `<p>Dancing, Live shows, 80s Funk, Retro fashion</p>`,
    },
    {
      id: '4',
      personaId: '1',
      title: 'Goals',
      content: `
        <ul>
          <li>Create timeless hits</li>
          <li>Experiment with vintage sounds</li>
          <li>Entertain global audiences</li>
        </ul>
      `,
    },
    {
      id: '5',
      personaId: '1',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Creative fatigue</li>
          <li>Overexposure</li>
          <li>Public expectations</li>
        </ul>
      `,
    },
    {
      id: '6',
      personaId: '1',
      title: 'Favorite Brands',
      content: `<p>Versace, Ray-Ban, Fender, Roland</p>`,
    },

    // 💃 Dua Lipa (ID: 2)
    {
      id: '7',
      personaId: '2',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 29</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Profession:</strong> Pop Star</p>
        <p><strong>Location:</strong> London</p>
        <p><strong>Relationship:</strong> Single</p>
      `,
    },
    {
      id: '8',
      personaId: '2',
      title: 'Personality',
      content: `
        <p><strong>Confidence</strong></p><div class="bar bar-90"></div>
        <p><strong>Style</strong></p><div class="bar bar-95"></div>
        <p><strong>Ambition</strong></p><div class="bar bar-90"></div>
      `,
    },
    {
      id: '9',
      personaId: '2',
      title: 'Interests',
      content: `<p>Fashion, Nightlife, Dance, Female empowerment</p>`,
    },
    {
      id: '10',
      personaId: '2',
      title: 'Goals',
      content: `
        <ul>
          <li>Define pop culture</li>
          <li>Lead fashion campaigns</li>
          <li>Stay original and edgy</li>
        </ul>
      `,
    },
    {
      id: '11',
      personaId: '2',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Media criticism</li>
          <li>Industry pressure</li>
          <li>Overwork</li>
        </ul>
      `,
    },
    {
      id: '12',
      personaId: '2',
      title: 'Favorite Brands',
      content: `<p>Prada, Puma, Spotify, Loewe</p>`,
    },

    // 👩‍🎤 Billie Eilish (ID: 3)
    {
      id: '13',
      personaId: '3',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 23</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Profession:</strong> Singer-Songwriter</p>
        <p><strong>Location:</strong> California</p>
        <p><strong>Relationship:</strong> Private</p>
      `,
    },
    {
      id: '14',
      personaId: '3',
      title: 'Personality',
      content: `
        <p><strong>Introverted</strong></p><div class="bar bar-80"></div>
        <p><strong>Creative</strong></p><div class="bar bar-95"></div>
        <p><strong>Authentic</strong></p><div class="bar bar-90"></div>
      `,
    },
    {
      id: '15',
      personaId: '3',
      title: 'Interests',
      content: `<p>Visual art, horror cinema, mental health advocacy</p>`,
    },
    {
      id: '16',
      personaId: '3',
      title: 'Goals',
      content: `
        <ul>
          <li>Push boundaries in pop music</li>
          <li>Maintain authenticity</li>
          <li>Express emotions through art</li>
        </ul>
      `,
    },
    {
      id: '17',
      personaId: '3',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Misunderstood public image</li>
          <li>Anxiety & pressure</li>
          <li>Lack of privacy</li>
        </ul>
      `,
    },
    {
      id: '18',
      personaId: '3',
      title: 'Favorite Brands',
      content: `<p>Gucci, Nike, Adobe, Apple</p>`,
    },

    // 🎤 Eminem & 50 Cent & Dre (ID: 4)
    {
      id: '19',
      personaId: '4',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 51</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Profession:</strong> Rap Legends</p>
        <p><strong>Location:</strong> Detroit & LA</p>
        <p><strong>Relationship:</strong> Private</p>
      `,
    },
    {
      id: '20',
      personaId: '4',
      title: 'Personality',
      content: `
        <p><strong>Resilience</strong></p><div class="bar bar-100"></div>
        <p><strong>Raw honesty</strong></p><div class="bar bar-95"></div>
        <p><strong>Drive</strong></p><div class="bar bar-100"></div>
      `,
    },
    {
      id: '21',
      personaId: '4',
      title: 'Interests',
      content: `<p>Freestyle, music production, documentaries</p>`,
    },
    {
      id: '22',
      personaId: '4',
      title: 'Goals',
      content: `
        <ul>
          <li>Preserve legacy</li>
          <li>Inspire next-gen rappers</li>
          <li>Push hip-hop boundaries</li>
        </ul>
      `,
    },
    {
      id: '23',
      personaId: '4',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Industry fakeness</li>
          <li>Censorship</li>
          <li>Pressure to stay relevant</li>
        </ul>
      `,
    },
    {
      id: '24',
      personaId: '4',
      title: 'Favorite Brands',
      content: `<p>Beats by Dre, Nike, Shady Records, Aftermath</p>`,
    },

    // System of a Down (ID: 5)
    {
      id: '25',
      personaId: '5',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 45-50</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Profession:</strong> Rock Band</p>
        <p><strong>Location:</strong> California</p>
        <p><strong>Relationship:</strong> Married/Private</p>
      `,
    },
    {
      id: '26',
      personaId: '5',
      title: 'Personality',
      content: `
        <p><strong>Activism</strong></p><div class="bar bar-100"></div>
        <p><strong>Creativity</strong></p><div class="bar bar-90"></div>
        <p><strong>Intensity</strong></p><div class="bar bar-100"></div>
      `,
    },
    {
      id: '27',
      personaId: '5',
      title: 'Interests',
      content: `<p>Politics, Armenian culture, Metal music</p>`,
    },
    {
      id: '28',
      personaId: '5',
      title: 'Goals',
      content: `
        <ul>
          <li>Fight injustice through music</li>
          <li>Raise awareness globally</li>
          <li>Fuse genres creatively</li>
        </ul>
      `,
    },
    {
      id: '29',
      personaId: '5',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Lack of progress in society</li>
          <li>Internal creative differences</li>
        </ul>
      `,
    },
    {
      id: '30',
      personaId: '5',
      title: 'Favorite Brands',
      content: `<p>Gibson, Marshall, Spotify, Amnesty Intl</p>`,
    },

    // 🧊 Miyagi & Andy Panda (ID: 6)
    {
      id: '31',
      personaId: '6',
      title: 'Personal Information',
      content: `
        <p><strong>Age:</strong> 28-30</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Profession:</strong> Rappers</p>
        <p><strong>Location:</strong> Russia</p>
        <p><strong>Relationship:</strong> Private</p>
      `,
    },
    {
      id: '32',
      personaId: '6',
      title: 'Personality',
      content: `
        <p><strong>Mystery</strong></p><div class="bar bar-85"></div>
        <p><strong>Flow</strong></p><div class="bar bar-95"></div>
        <p><strong>Loyalty</strong></p><div class="bar bar-90"></div>
      `,
    },
    {
      id: '33',
      personaId: '6',
      title: 'Interests',
      content: `<p>Chill beats, street culture, poetry</p>`,
    },
    {
      id: '34',
      personaId: '6',
      title: 'Goals',
      content: `
        <ul>
          <li>Stay true to underground</li>
          <li>Reach global stage</li>
          <li>Build a loyal audience</li>
        </ul>
      `,
    },
    {
      id: '35',
      personaId: '6',
      title: 'Frustrations',
      content: `
        <ul>
          <li>Media noise</li>
          <li>Cultural barriers</li>
        </ul>
      `,
    },
    {
      id: '36',
      personaId: '6',
      title: 'Favorite Brands',
      content: `<p>North Face, Beats, Nike, Yandex Music</p>`,
    },
    {
      id: '37',
      personaId: '7',
      title: 'Personal Information',
      content: `
    <p><strong>Age:</strong> 39</p>
    <p><strong>Gender:</strong> Female</p>
    <p><strong>Profession:</strong> Singer-Songwriter, Poet</p>
    <p><strong>Location:</strong> New York / Los Angeles</p>
    <p><strong>Relationship:</strong> Private</p>
  `,
    },
    {
      id: '38',
      personaId: '7',
      title: 'Personality',
      content: `
    <p><strong>Melancholy</strong></p><div class="bar bar-95"></div>
    <p><strong>Creativity</strong></p><div class="bar bar-100"></div>
    <p><strong>Romanticism</strong></p><div class="bar bar-100"></div>
  `,
    },
    {
      id: '39',
      personaId: '7',
      title: 'Interests',
      content: `<p>Poetry, Vintage Americana, Literature, Film</p>`,
    },
    {
      id: '40',
      personaId: '7',
      title: 'Goals',
      content: `
    <ul>
      <li>Create cinematic music</li>
      <li>Write books and poetry</li>
      <li>Connect emotionally with listeners</li>
    </ul>
  `,
    },
    {
      id: '41',
      personaId: '7',
      title: 'Frustrations',
      content: `
    <ul>
      <li>Being misunderstood</li>
      <li>Media misrepresentation</li>
      <li>Emotional vulnerability in public</li>
    </ul>
  `,
    },
    {
      id: '42',
      personaId: '7',
      title: 'Favorite Brands',
      content: `<p>Chanel, Polaroid, Fendi, RCA</p>`,
    },
    {
      id: '43',
      personaId: '8',
      title: 'Personal Information',
      content: `
    <p><strong>Age:</strong> 41</p>
    <p><strong>Gender:</strong> Female-fronted Rock Band</p>
    <p><strong>Profession:</strong> Musicians, Songwriters</p>
    <p><strong>Location:</strong> Arkansas / US</p>
    <p><strong>Relationship:</strong> Mixed (band members)</p>
  `,
    },
    {
      id: '44',
      personaId: '8',
      title: 'Personality',
      content: `
    <p><strong>Intensity</strong></p><div class="bar bar-95"></div>
    <p><strong>Emotion</strong></p><div class="bar bar-100"></div>
    <p><strong>Gothic Aesthetic</strong></p><div class="bar bar-100"></div>
  `,
    },
    {
      id: '45',
      personaId: '8',
      title: 'Interests',
      content: `<p>Dark poetry, Visual performance, Symphonic rock</p>`,
    },
    {
      id: '46',
      personaId: '8',
      title: 'Goals',
      content: `
    <ul>
      <li>Empower through emotional expression</li>
      <li>Blend classical and metal genres</li>
      <li>Support female voices in rock</li>
    </ul>
  `,
    },
    {
      id: '47',
      personaId: '8',
      title: 'Frustrations',
      content: `
    <ul>
      <li>Industry gatekeeping</li>
      <li>Genre stereotypes</li>
      <li>Label control issues</li>
    </ul>
  `,
    },
    {
      id: '48',
      personaId: '8',
      title: 'Favorite Brands',
      content: `<p>Corsets, Steinberg Audio, Marshall Amps, Spotify</p>`,
    },
  ],
};

const personaSlice = createSlice({
  name: 'persona',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<PersonaCardType[]>) {
      state.cards = action.payload;
    },
  },
});

export const { setCards } = personaSlice.actions;
export default personaSlice.reducer;
