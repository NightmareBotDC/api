module.exports = {
	name: "spotify/playing",
	method: "GET",
	execute: async (req, res, database, Spotify) => {
		Spotify.getMyCurrentPlayingTrack().then(
			async (data) => {
				if (!data.body.item)
					return res.status(500).json({
						error: "Hmm, it looks like Select isn't listening to music at the moment. Please try again later!",
					});
				else res.status(200).json(data.body);
			},
			async (err) => {
				res.status(500).json({
					error: `${err}`,
				});
			}
		).catch(async (err) => {
            return res.status(500).json(err);
        });
	},
};
