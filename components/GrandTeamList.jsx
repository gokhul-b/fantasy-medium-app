import { View, Text, ScrollView } from "react-native";

const GrandTeamList = ({ genTeams, mainTeam }) => {
  const temp_team = {};
  mainTeam.teamA.forEach((player) => {
    temp_team[player.playerName] = player.role;
  });
  mainTeam.teamB.forEach((player) => {
    temp_team[player.playerName] = player.role;
  });
  console.log(genTeams.length);
  const groupedPlayers = {
    WK: [],
    Bat: [],
    AR: [],
    Bowl: [],
  };

  if (temp_team) {
    Object.entries(temp_team).forEach(([name, role]) => {
      if (
        role === "Main WK" ||
        role === "WK" ||
        role === "2° WK" ||
        role === "3° WK"
      ) {
        groupedPlayers.WK.push({ name, role });
      } else if (
        role === "Main Bat" ||
        role === "Last Bat" ||
        role === "Ops Main Bat" ||
        role === "Ops Last Bat" ||
        role === "Ops 3° Bat" ||
        role === "Batsman" ||
        role === "2° Bat" ||
        role === "3° Bat" ||
        role === "4° Bat"
      ) {
        groupedPlayers.Bat.push({ name, role });
      } else if (
        role === "Main Bowl" ||
        role === "Last Bowl" ||
        role === "Ops Main Bowl" ||
        role === "Ops Last Bowl" ||
        role === "Bowler" ||
        role === "2° Bowl" ||
        role === "3° Bowl" ||
        role === "4° Bowl"
      ) {
        groupedPlayers.Bowl.push({ name, role });
      } else if (
        role === "Main All" ||
        role === "Last All" ||
        role === "Ops Main All" ||
        role === "All" ||
        role === "2° All" ||
        role === "3° All" ||
        role === "4° All"
      ) {
        groupedPlayers.AR.push({ name, role });
      }
    });
  }

  const formatPlayerName = (name, teamPair) => {
    if (name === teamPair.captain) {
      return `${name}(c)`;
    } else if (name === teamPair.viceCaptain) {
      return `${name}(vc)`;
    } else {
      return name;
    }
  };

  return (
    <View>
      {genTeams &&
        genTeams.map((teamPair, index) => (
          <View key={index} className="rounded-lg bg-white mb-4 p-3">
            <Text className="text-xs text-slate-400 text-center font-psemibold">
              #Team{index + 1}
            </Text>
            <View>
              {Object.entries(groupedPlayers).map(([group, players]) => (
                <View key={group} className="mb-2">
                  <Text className="text-xs font-semibold font-pbold">
                    {group}
                  </Text>
                  <Text className="font-medium text-xs font-pmedium">
                    {players
                      .map(({ name }) => formatPlayerName(name, teamPair))
                      .join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
    </View>
  );
};

export default GrandTeamList;
