import { View, StyleSheet } from "react-native";

/**
 * Decorative cluster of overlapping pebble shapes
 * inspired by dacite and andesite volcanic rocks.
 */

// Dacite / andesite color palette
const ROCK_COLORS = {
    daciteLight: "#cdc5bb",
    daciteMid: "#b5ada3",
    daciteDark: "#9a928a",
    andesiteLight: "#a09994",
    andesiteMid: "#8a827a",
    andesiteDark: "#6e6760",
    phenocryst: "#d8d2cb", // light crystal flecks in dacite
};

interface RockClusterProps {
    size?: "sm" | "md" | "lg";
}

export const RockCluster = ({ size = "md" }: RockClusterProps) => {
    const scale = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;

    return (
        <View style={[styles.container, { width: 80 * scale, height: 56 * scale }]}>
            {/* Back-left stone (andesite, darker) */}
            <View
                style={[
                    styles.stone,
                    {
                        width: 32 * scale,
                        height: 26 * scale,
                        borderRadius: 13 * scale,
                        backgroundColor: ROCK_COLORS.andesiteMid,
                        bottom: 0,
                        left: 4 * scale,
                        transform: [{ rotate: "-12deg" }],
                    },
                ]}
            />
            {/* Back-right stone (dacite, lighter) */}
            <View
                style={[
                    styles.stone,
                    {
                        width: 30 * scale,
                        height: 24 * scale,
                        borderRadius: 12 * scale,
                        backgroundColor: ROCK_COLORS.daciteMid,
                        bottom: 2 * scale,
                        right: 6 * scale,
                        transform: [{ rotate: "8deg" }],
                    },
                ]}
            />
            {/* Center-bottom large stone (andesite) */}
            <View
                style={[
                    styles.stone,
                    {
                        width: 38 * scale,
                        height: 28 * scale,
                        borderRadius: 14 * scale,
                        backgroundColor: ROCK_COLORS.andesiteLight,
                        bottom: 0,
                        left: 20 * scale,
                        transform: [{ rotate: "3deg" }],
                    },
                ]}
            />
            {/* Top stone (dacite, with phenocryst spot) */}
            <View
                style={[
                    styles.stone,
                    {
                        width: 28 * scale,
                        height: 22 * scale,
                        borderRadius: 11 * scale,
                        backgroundColor: ROCK_COLORS.daciteLight,
                        top: 0,
                        left: 24 * scale,
                        transform: [{ rotate: "-5deg" }],
                    },
                ]}
            >
                {/* Phenocryst fleck */}
                <View
                    style={{
                        width: 5 * scale,
                        height: 4 * scale,
                        borderRadius: 2 * scale,
                        backgroundColor: ROCK_COLORS.phenocryst,
                        position: "absolute",
                        top: 6 * scale,
                        left: 8 * scale,
                    }}
                />
                <View
                    style={{
                        width: 3 * scale,
                        height: 3 * scale,
                        borderRadius: 1.5 * scale,
                        backgroundColor: ROCK_COLORS.phenocryst,
                        position: "absolute",
                        top: 10 * scale,
                        right: 7 * scale,
                    }}
                />
            </View>
            {/* Small pebble accent */}
            <View
                style={[
                    styles.stone,
                    {
                        width: 14 * scale,
                        height: 12 * scale,
                        borderRadius: 6 * scale,
                        backgroundColor: ROCK_COLORS.andesiteDark,
                        bottom: 4 * scale,
                        right: 2 * scale,
                        transform: [{ rotate: "15deg" }],
                    },
                ]}
            />
        </View>
    );
};

/** Simple inline pebble pair for subtle accents */
export const PebblePair = ({ color = ROCK_COLORS.daciteMid }: { color?: string }) => (
    <View style={pebbleStyles.row}>
        <View style={[pebbleStyles.pebble, pebbleStyles.pebbleLeft, { backgroundColor: color }]} />
        <View
            style={[
                pebbleStyles.pebble,
                pebbleStyles.pebbleRight,
                { backgroundColor: adjustAlpha(color, 0.6) },
            ]}
        />
    </View>
);

function adjustAlpha(hex: string, opacity: number): string {
    const alpha = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0");
    return hex + alpha;
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    stone: {
        position: "absolute",
    },
});

const pebbleStyles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    pebble: {
        width: 6,
        height: 5,
        borderRadius: 3,
    },
    pebbleLeft: {
        transform: [{ rotate: "-10deg" }],
    },
    pebbleRight: {
        width: 5,
        height: 4,
        borderRadius: 2.5,
        transform: [{ rotate: "12deg" }],
    },
});
