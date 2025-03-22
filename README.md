# Dog Search App

## Development

server: npm run dev

## Search Functionality

- Search by: **Breed, Name, Age (Range)**
- Sort results: **Ascending | Descending**
- Browse **paginated** results of dogs
- Select breeds from a **dropdown** to filter results

## Tech Stack

- **React + TypeScript**
- **Zustand** for state management
- **TanStack Query** for data fetching
- **Axios** for API calls

## API Endpoints

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| `GET`  | `/dogs/breeds` | Returns a list of breeds |
| `GET`  | `/dogs/search` | Returns dog IDs          |
| `POST` | `/dogs`        | Returns dog objects      |
| `POST` | `/dogs/match`  | Returns dog objects      |
