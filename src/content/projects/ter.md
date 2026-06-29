---
title: "Threat Modeling and Infrastructure Audit: Allocation Vulnerabilities"
description: "An analytical study of heap overflow memory corruption vulnerabilities on Linux architectures."
techStack: ["GLIBC", "Linux", "Reverse Engineering", "ASLR"]
language: "fr"
---
_Modélisation des Menaces et Audit d'Infrastructure : Vulnérabilités d'Allocation (TER)_

*   **Étude analytique** des vulnérabilités de corruption mémoire de type _Heap Overflow_ sur les architectures Linux (GLIBC 2.40 et 2.41).
*   **Évaluation de l'impact** des défauts de gestion du cycle de vie des données, notamment les pointeurs résiduels (_Use-After-Free_) et les corruptions de limites (_Out-of-Bounds_).
*   **Audit de l'efficacité** des mécanismes de défense du système d'exploitation.
*   **Analyse des contournements** de la randomisation de l'espace d'adressage (ASLR).
*   **Examen du mécanisme** de _Safe Linking_ et de son chiffrement des pointeurs par XOR-shift.
*   **Cartographie des vecteurs de compromission** logiques ciblant la mémoire dynamique, incluant le détournement de listes d'attente (_Tcache Poisoning_) et les altérations structurelles (_Overlapping Chunks_).
*   **Veille technologique** et prospective sur le durcissement continu de l'allocateur mémoire.
*   **Analyse des contrôles d'intégrité** stricts ajoutés dans la GLIBC 2.42 et de la refonte architecturale prévue pour la version 2.43.