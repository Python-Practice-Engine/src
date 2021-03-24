use test;

#Inserting into concept table
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('1', 'print', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('2', 'data_types', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('3', 'data_types', '2');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('5', 'variables', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('6', 'variables', '2');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('7', 'variables', '3');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('8', 'variables', '4');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('4', 'data_types', '3');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('9', 'comparison_operators', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('10', 'logical_operators', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('11', 'arithmetic_operators', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('12', 'if_else', '1');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('13', 'if_else', '2');
INSERT INTO `new_schema`.`concept` (`id`, `name`, `level`) VALUES ('14', 'while_loops', '1');

#Inserting into question concept table
INSERT INTO `new_schema`.`question_concept` (`question_id`, `concept_id`) VALUES ('1', '1');
INSERT INTO `new_schema`.`question_concept` (`question_id`, `concept_id`) VALUES ('2', '2');
INSERT INTO `new_schema`.`question_concept` (`question_id`, `concept_id`) VALUES ('3', '5');
INSERT INTO `new_schema`.`question_concept` (`question_id`, `concept_id`) VALUES ('4', '3');
INSERT INTO `new_schema`.`question_concept` (`question_id`, `concept_id`) VALUES ('5', '6');