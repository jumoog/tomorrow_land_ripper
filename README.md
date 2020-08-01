# tomorrow_land_ripper

## Disclaimer
*Tomorrowland do not permit users to record or copy the perfomances.* 

## How To
Visit https://relive.aroundtheworld.tomorrowland.com/festival open the developer console open and watch a performance.
Look for the https://live-playout.tomorrowland.com/..../master.m3u8?token=%TOKEN request.
After that request there should be 2 times a https://wp965ytzj3.execute-api.eu-central-1.amazonaws.com/prod/stream/start request.
Click on the `POST` requst and copy the Value from `Authorization` Header into `key.json`
The Key is valid for a limit time. Once the Key expires you need to refresh the Key.
To download performances. Start the JavaScript for a Stage (for exmaple `node Mainstage.js` to download the Mainstage shows)
If the Key expires the script will stop. If you refresh the Key you can run it again and the download will resume.

## Show Overview
| Artists Name                  | Stage name | Starttime                 | Endtime                   |
|-------------------------------|------------|---------------------------|---------------------------|
| Stephan Bodzin                | Atmosphere | 2020-07-25 22:00:00+02:00 | 2020-07-25 22:55:00+02:00 |
| Dixon                         | Atmosphere | 2020-07-25 22:55:00+02:00 | 2020-07-25 23:55:00+02:00 |
| Tale Of Us                    | Atmosphere | 2020-07-25 23:55:00+02:00 | 2020-07-26 00:55:00+02:00 |
| Amelie Lens                   | Atmosphere | 2020-07-26 23:00:00+02:00 | 2020-07-27 00:00:00+02:00 |
| Reinier Zonneveld             | Atmosphere | 2020-07-27 00:00:00+02:00 | 2020-07-27 01:00:00+02:00 |
| Joyhauser                     | Atmosphere | 2020-07-26 22:00:00+02:00 | 2020-07-26 23:00:00+02:00 |
| Gryffin                       | Cave       | 2020-07-26 22:00:00+02:00 | 2020-07-26 22:40:00+02:00 |
| NGHTMRE                       | Cave       | 2020-07-25 23:05:00+02:00 | 2020-07-25 23:35:00+02:00 |
| Netsky                        | Cave       | 2020-07-26 23:10:00+02:00 | 2020-07-26 23:45:00+02:00 |
| Eptic                         | Cave       | 2020-07-25 22:00:00+02:00 | 2020-07-25 22:30:00+02:00 |
| Modestep                      | Cave       | 2020-07-25 22:30:00+02:00 | 2020-07-25 23:05:00+02:00 |
| Carnage                       | Cave       | 2020-07-25 23:35:00+02:00 | 2020-07-26 00:10:00+02:00 |
| San Holo                      | Cave       | 2020-07-26 22:40:00+02:00 | 2020-07-26 23:10:00+02:00 |
| Yellow Claw                   | Cave       | 2020-07-26 23:45:00+02:00 | 2020-07-27 00:15:00+02:00 |
| Adam Beyer                    | Core       | 2020-07-25 20:05:00+02:00 | 2020-07-25 21:05:00+02:00 |
| Charlotte de Witte            | Core       | 2020-07-25 21:05:00+02:00 | 2020-07-25 22:00:00+02:00 |
| Adriatique                    | Core       | 2020-07-26 20:00:00+02:00 | 2020-07-26 21:05:00+02:00 |
| Joris Voorn                   | Core       | 2020-07-26 21:05:00+02:00 | 2020-07-26 22:00:00+02:00 |
| Yves Deruyter                 | Core       | 2020-07-25 18:15:00+02:00 | 2020-07-25 19:05:00+02:00 |
| ANNA                          | Core       | 2020-07-25 19:05:00+02:00 | 2020-07-25 20:05:00+02:00 |
| Cellini                       | Core       | 2020-07-26 18:15:00+02:00 | 2020-07-26 19:00:00+02:00 |
| Patrice Bäumel                | Core       | 2020-07-26 19:00:00+02:00 | 2020-07-26 20:00:00+02:00 |
| Bassjackers                   | Elixir     | 2020-07-26 21:55:00+02:00 | 2020-07-26 22:40:00+02:00 |
| Mr Pig                        | Elixir     | 2020-07-25 18:00:00+02:00 | 2020-07-25 18:45:00+02:00 |
| B Jones                       | Elixir     | 2020-07-25 18:45:00+02:00 | 2020-07-25 19:30:00+02:00 |
| Klingande                     | Elixir     | 2020-07-25 19:30:00+02:00 | 2020-07-25 20:15:00+02:00 |
| Fedde Le Grand                | Elixir     | 2020-07-25 20:15:00+02:00 | 2020-07-25 21:00:00+02:00 |
| Robin Schulz                  | Elixir     | 2020-07-25 21:00:00+02:00 | 2020-07-25 21:45:00+02:00 |
| DJ Licious                    | Elixir     | 2020-07-26 18:00:00+02:00 | 2020-07-26 18:45:00+02:00 |
| EDX                           | Elixir     | 2020-07-26 18:45:00+02:00 | 2020-07-26 19:45:00+02:00 |
| Cat Dealers                   | Elixir     | 2020-07-26 19:45:00+02:00 | 2020-07-26 20:30:00+02:00 |
| Yves V                        | Elixir     | 2020-07-26 20:30:00+02:00 | 2020-07-26 21:15:00+02:00 |
| Laidback Luke                 | Elixir     | 2020-07-26 21:15:00+02:00 | 2020-07-26 21:55:00+02:00 |
| Claptone                      | Freedom    | 2020-07-25 20:45:00+02:00 | 2020-07-25 21:30:00+02:00 |
| Solardo                       | Freedom    | 2020-07-25 19:00:00+02:00 | 2020-07-25 19:45:00+02:00 |
| MaRLo                         | Freedom    | 2020-07-26 19:00:00+02:00 | 2020-07-26 19:40:00+02:00 |
| NWYR                          | Freedom    | 2020-07-26 20:20:00+02:00 | 2020-07-26 20:50:00+02:00 |
| Vini Vici                     | Freedom    | 2020-07-26 20:50:00+02:00 | 2020-07-26 21:25:00+02:00 |
| Jack Back                     | Freedom    | 2020-07-25 19:45:00+02:00 | 2020-07-25 20:45:00+02:00 |
| Dash Berlin                   | Freedom    | 2020-07-26 19:40:00+02:00 | 2020-07-26 20:20:00+02:00 |
| VER:WEST                      | Freedom    | 2020-07-25 21:30:00+02:00 | 2020-07-25 22:30:00+02:00 |
| Eric Prydz                    | Freedom    | 2020-07-25 22:30:00+02:00 | 2020-07-25 23:30:00+02:00 |
| Sunnery James & Ryan Marciano | Mainstage  | 2020-07-26 18:00:00+02:00 | 2020-07-26 19:25:00+02:00 |
| Paul Kalkbrenner              | Mainstage  | 2020-07-25 22:05:00+02:00 | 2020-07-25 22:45:00+02:00 |
| Steve Aoki                    | Mainstage  | 2020-07-25 22:45:00+02:00 | 2020-07-25 23:25:00+02:00 |
| Armin van Buuren              | Mainstage  | 2020-07-25 23:25:00+02:00 | 2020-07-26 00:15:00+02:00 |
| Dimitri Vegas & Like Mike     | Mainstage  | 2020-07-26 00:15:00+02:00 | 2020-07-26 00:50:00+02:00 |
| Lost Frequencies              | Mainstage  | 2020-07-25 19:31:00+02:00 | 2020-07-25 20:00:00+02:00 |
| Timmy Trumpet                 | Mainstage  | 2020-07-26 21:00:00+02:00 | 2020-07-26 21:40:00+02:00 |
| Kölsch                        | Mainstage  | 2020-07-26 21:40:00+02:00 | 2020-07-26 22:25:00+02:00 |
| Tiësto                        | Mainstage  | 2020-07-26 22:25:00+02:00 | 2020-07-26 23:05:00+02:00 |
| Martin Garrix                 | Mainstage  | 2020-07-27 00:05:00+02:00 | 2020-07-27 01:10:00+02:00 |
| NERVO                         | Mainstage  | 2020-07-25 20:00:00+02:00 | 2020-07-25 20:30:00+02:00 |
| Alan Walker                   | Mainstage  | 2020-07-25 20:30:00+02:00 | 2020-07-25 21:05:00+02:00 |
| Oliver Heldens                | Mainstage  | 2020-07-25 18:00:00+02:00 | 2020-07-25 19:30:00+02:00 |
| David Guetta                  | Mainstage  | 2020-07-26 23:05:00+02:00 | 2020-07-27 00:05:00+02:00 |
| Afrojack                      | Mainstage  | 2020-07-25 21:05:00+02:00 | 2020-07-25 21:50:00+02:00 |
| Don Diablo                    | Mainstage  | 2020-07-26 20:15:00+02:00 | 2020-07-26 21:00:00+02:00 |
| Vintage Culture               | Mainstage  | 2020-07-26 19:25:00+02:00 | 2020-07-26 20:15:00+02:00 |
| Katy Perry                    | Mainstage  | 2020-07-25 21:50:00+02:00 | 2020-07-25 22:05:00+02:00 |
| Feest DJ Lucki Luc & Mr. E    | Moosebar   | 2020-07-26 18:00:00+02:00 | 2020-07-27 01:00:00+02:00 |
| Jan V & Frank Mellemans       | Moosebar   | 2020-07-25 18:00:00+02:00 | 2020-07-26 01:00:00+02:00 |
| Da Tweekaz                    | The Wall   | 2020-07-25 20:30:00+02:00 | 2020-07-25 21:00:00+02:00 |
| Ran-D                         | The Wall   | 2020-07-25 21:00:00+02:00 | 2020-07-25 21:30:00+02:00 |
| Coone                         | The Wall   | 2020-07-26 21:10:00+02:00 | 2020-07-26 21:40:00+02:00 |
| Sub Zero Project              | The Wall   | 2020-07-26 21:40:00+02:00 | 2020-07-26 22:10:00+02:00 |
| D-Block & S-te-Fan            | The Wall   | 2020-07-25 21:30:00+02:00 | 2020-07-25 22:00:00+02:00 |
| Wildstylez                    | The Wall   | 2020-07-26 20:30:00+02:00 | 2020-07-26 21:10:00+02:00 |
