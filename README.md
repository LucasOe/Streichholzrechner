# Der Streichholzrechner

Es soll die Funktionsweise eines einfachen Rechners &quot;nachgespielt&quot; werden.

Dieser Rechner besteht aus einem Speicher, zwei Registern und einem Befehlsregister.

Als Hilfsmittel benötigt man ein Blatt Papier, auf das man mehrere Abschnitte einzeichnet und diese von 1 beginnend durchnummeriert. Dieses sollen die Speicherzellen sein.

Zusätzlich ein Blatt Papier mit zwei Abschnitten, X und Y, die die Register darstellen sollen. Sowie viele Streichhölzer (für den Inhalt der Speicherzellen) und einen Groschen, der als Anzeige dienen soll, auf welche Speicherzelle das Befehlsregister gerade zeigt.

(OK, OK, das Ganze funktioniert natürlich auch am Computer, z.B. mit Excel)

### Wie funktioniert der Rechner?

Die Streichhölzer werden in die Speicherzellen gelegt und evtl. in die Register. Dabei repräsentieren diese entweder eine Anweisung, oder eine Zahl.

Der Groschen wird immer zuerst auf die Speicherzelle 1 gelegt. Sinnigerweise sollte dort also eine Anweisung stehen. Die Anweisung wird abgearbeitet, dadurch sicherlich einige Streichhölzer bewegt und der Groschen dann auf die nächste Speicherzelle verschoben.

Dieses wird solange wiederholt, bis der Groschen durch eine Anweisung auf die Speicherzelle 0 (braucht nicht eingezeichnet sein) verschoben wird. Dieses markiert das Ende des Programms.

Der Rechner soll ein 8-Bit Rechner sein, d.h. er kann höchstens 256 Speicherzellen adressieren und Werte von 0 bis 255 in den Speicher- und Registerzellen enthalten.

Negative Werte kennt er nicht!! Nur das X-Register kann einen negativen Wert aufnehmen (wir nehmen an, dass es dafür ein extra Flag hat), diesen aber nicht in eine Speicherzelle schreiben. Auch kann damit nicht weitergerechnet werden!

### Welche Anweisungen gibt es?

Es gibt 8 verschiedene Anweisungen. Jede wird durch einen Wert repräsentiert (die Anzahl der Streichhölzer in der Speicherzelle). Zur besseren Lesbarkeit wird in der folgenden Tabelle ein Kürzel mit angegeben.

| Wert | Kürzel | Erläuterung |
| --- | --- | --- |
| 1 | Jmpg | Bedingter Sprung: Sprung zu der Adresse, die im Y-Register steht, wenn der Inhalt des X-Registers größer 0 ist.D.h. der Groschen wird auf die Speicherzelle geschoben, dessen Nummer im Y-Register steht. |
| 2 | Jmp | Unbedingter Sprung: Sprung zu der Adresse, die im Y-Register steht.D.h. der Groschen wird auf die Speicherzelle geschoben, dessen Nummer im Y-Register steht. |
| 3 | Ld x | Lade einen Wert in das X-Register: Der Wert steht in der folgenden Speicherzelle. Der Groschen wird dann auf die übernächste Speicherzelle verschoben! |
| 4 | Ld y | Lade einen Wert in das Y-Register: Der Wert steht in der folgenden Speicherzelle. Der Groschen wird dann auf die übernächste Speicherzelle verschoben! |
| 5 | Add | Addition: X-Register := X-Register + Y-Register |
| 6 | Sub | Subtraktion: X-Register := X-Register – Y-RegisterIst das Ergebnis negativ, wird nur ein Streichholz quer gelegt. Der eigentliche Wert ist nicht zu speichern! Es ist nur für jmpg interessant, ob hier ein negativer Wert vorliegt. |
| 7 | Str X | Store X: Der Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht. |
| 8 | Ld f | Load from: Lädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht. |

### Beispiel:

Aufgabe:

5 + 6 ist zu berechnen und das Ergebnis in Speicherzelle 20 zu speichern.

| Speicherzelle | Inhalt | Bedeutung |
| --- | --- | --- |
| 1 | 3 | Ld X |
| 2 | 5 | 5 |
| 3 | 4 | Ld Y |
| 4 | 6 | 6 |
| 5 | 5 | Add |
| 6 | 4 | Ld Y |
| 7 | 20 | 20 |
| 8 | 7 | Str X |
| 9 | 4 | Ld Y |
| 10 | 0 | 0 |
| 11 | 2 | Jmp |
| 12 | 0 | 0 |
| 13 | 0 | 0 |
| 14 | 0 | 0 |
| 15 | 0 | 0 |
| 16 | 0 | 0 |
| 17 | 0 | 0 |
| 18 | 0 | 0 |
| 19 | 0 | 0 |
| 20 | 0 | 0 |
