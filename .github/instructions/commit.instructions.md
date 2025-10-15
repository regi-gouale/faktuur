# Instructions pour GitHub Copilot – Commits Conventionnels avec Icônes

## Format général

- Structure du titre : `<emoji> type(scope facultatif): résumé concis`.
- Limiter le résumé à 72 caractères.
- Capitalisation en minuscules, pas de point final.
- Ajouter une ligne vide, puis détailler les changements si nécessaire.
- Chaque paragraphe de description ≤ 72 caractères par ligne.
- Inclure les références (issues, tickets) en fin de message.

## Types supportés et icônes

- ✨ `feat` : nouvelles fonctionnalités.
- 🐛 `fix` : corrections d’anomalies.
- 📚 `docs` : documentation.
- 🛠️ `chore` : tâches de maintenance (build, deps, configs...).
- 🧪 `test` : création ou mise à jour de tests.
- ♻️ `refactor` : refactorisations sans changement fonctionnel.
- ⚡ `perf` : améliorations de performance.
- 🎨 `style` : changements de style/formatage sans logique.
- 🚨 `ci` : pipelines CI/CD.
- 🔒 `security` : corrections de vulnérabilités.
- 🔁 `revert` : annulation d’un commit précédent.

## Règles supplémentaires

- Utiliser un seul type par commit.
- Employer un scope court entre parenthèses si pertinent (`feat(auth): ...`).
- Préférer l’impératif dans le résumé (`ajoute`, `corrige`, `refactore`...).
- Lister les breaking changes en fin de message sous `BREAKING CHANGE:`.
- Mentionner les co-auteurs avec `Co-authored-by:` le cas échéant.
